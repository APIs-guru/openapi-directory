import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MapMatchingAPI:
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

    
    def post_gpx(self, request: operations.PostGpxRequest) -> operations.PostGpxResponse:
        r"""Map-match a GPX file
        ### Example
        You get an example response for a GPX via:
        
        ```
        curl -XPOST -H \"Content-Type: application/gpx+xml\" \"https://graphhopper.com/api/1/match?vehicle=car&key=[YOUR_KEY]\" --data @/path/to/some.gpx
        ```
        
        A minimal working GPX file looks like
        ```gpx
        <gpx>
         <trk>
          <trkseg>
           <trkpt lat=\"51.343657\" lon=\"12.360708\"></trkpt>
           <trkpt lat=\"51.343796\" lon=\"12.361337\"></trkpt>
           <trkpt lat=\"51.342784\" lon=\"12.361882\"></trkpt>
          </trkseg>
         </trk>
        </gpx>
        ```
        
        ### Introduction
        ![Map Matching screenshot](./img/map-matching-example.gif)
        
        The Map Matching API is part of the GraphHopper Directions API and with this API you can snap measured GPS points typically as GPX files to a digital
        road network to e.g. clean data or attach certain data like elevation or turn instructions to it. Read more at Wikipedia.
        
        In the example screenshot above and demo you see the Map Matching API in action where the black line is the GPS track and the green one is matched result.
        
        Most of the times, you can simply POST a GPX file, but some of the request parameters of the [Routing API](#tag/Routing-API) apply here, too.
        
        ### API Clients and Examples
        See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#map-matching).
        
        ### Limits and Counts
        The cost for one request depends on the number of GPS location and is documented [here](https://graphhopper.com/api/1/docs/FAQ/).
        
        One request should not exceed the Map Matching API location limit depending on the package, see the pricing in our dashboard.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/match"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGpxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RouteResponse])
                res.route_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out

        return res

    