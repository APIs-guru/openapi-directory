import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class RoutingAPI:
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

    
    def get_route_info(self) -> operations.GetRouteInfoResponse:
        r"""Coverage information
        Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/route/info"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRouteInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InfoResponse])
                res.info_response = out

        return res

    
    def get_route(self, request: operations.GetRouteRequest) -> operations.GetRouteResponse:
        r"""GET Route Endpoint
        The GET request is the most simple one: just specify the parameter in the URL and you are done.
        Can be tried directly in every browser.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/route"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RouteResponse])
                res.route_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out
        elif r.status_code == 501:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out

        return res

    
    def post_route(self, request: operations.PostRouteRequest) -> operations.PostRouteResponse:
        r"""POST Route Endpoint
        Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.
        If you are familiar with POST requests and JSON then do not hesitate to continue here.
        
        Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint
        has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly
        speed up the request.
        
        To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.
        The effected parameters are: `points`, `point_hints` and `snap_preventions`.
        
        **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.
        
        For example `point=10,11&point=20,22` will be converted to the `points` array (plural):
        ```json
        { \"points\": [[11,10], [22,20]] }
        ```
        Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`
        similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).
        
        Example:
        ```bash
        curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/route?key=[YOUR_KEY]\" -d '{\"elevation\":false,\"points\":[[-0.087891,51.534377],[-0.090637,51.467697]],\"vehicle\":\"car\"}'
        ```
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/route"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RouteResponse])
                res.route_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out
        elif r.status_code == 501:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GhError])
                res.gh_error = out

        return res

    