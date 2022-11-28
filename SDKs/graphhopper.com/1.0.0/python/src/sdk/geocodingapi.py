import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class GeocodingAPI:
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

    
    def get_geocode(self, request: operations.GetGeocodeRequest) -> operations.GetGeocodeResponse:
        r"""Geocoding Endpoint
        
        ### Introduction
        
        ![Geocoding Example](./img/geocoding-example.png)
        
        _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
        For example the conversion from `Berlin` to `52.5170365,13.3888599`.
        
        _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geocode"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeocodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.geocoding_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out

        return res

    