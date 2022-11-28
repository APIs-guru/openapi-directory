import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class IsochroneAPI:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_isochrone(self, request: operations.GetIsochroneRequest) -> operations.GetIsochroneResponse:
        r"""Isochrone Endpoint
        ### Example
        You can get an example response via:
        
        ```
        curl \"https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]\"
        ```
        
        Don't forget to replace the placeholder with your own key.
        
        ### Introduction
        ![Isochrone screenshot](./img/isochrone-example.png)
        
        An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
        With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.
        
        ### Use Cases
        Some possible areas in which this API may be useful to you:
        
        - real estate analysis
        - realtors
        - vehicle scheduling
        - geomarketing
        - reach of electric vehicles
        - transport planning
        - logistics (distribution and retail network planning)
        
        ### API Clients and Examples
        See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/isochrone"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIsochroneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IsochroneResponse])
                res.isochrone_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out

        return res

    