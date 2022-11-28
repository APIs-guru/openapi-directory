import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Locations:
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

    
    def mybusinessbusinesscalls_locations_businesscallsinsights_list(self, request: operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest) -> operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse:
        r"""Returns insights for Business calls for a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/businesscallsinsights", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBusinessCallsInsightsResponse])
                res.list_business_calls_insights_response = out

        return res

    
    def mybusinessbusinesscalls_locations_get_businesscallssettings(self, request: operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest) -> operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse:
        r"""Returns the Business calls settings resource for the given location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessCallsSettings])
                res.business_calls_settings = out

        return res

    
    def mybusinessbusinesscalls_locations_update_businesscallssettings(self, request: operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest) -> operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse:
        r"""Updates the Business call settings for the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessCallsSettings])
                res.business_calls_settings = out

        return res

    