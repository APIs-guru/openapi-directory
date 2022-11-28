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

    
    def mybusinesslodging_locations_get_lodging(self, request: operations.MybusinesslodgingLocationsGetLodgingRequest) -> operations.MybusinesslodgingLocationsGetLodgingResponse:
        r"""Returns the Lodging of a specific location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinesslodgingLocationsGetLodgingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Lodging])
                res.lodging = out

        return res

    
    def mybusinesslodging_locations_lodging_get_google_updated(self, request: operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest) -> operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse:
        r"""Returns the Google updated Lodging of a specific location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:getGoogleUpdated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetGoogleUpdatedLodgingResponse])
                res.get_google_updated_lodging_response = out

        return res

    
    def mybusinesslodging_locations_update_lodging(self, request: operations.MybusinesslodgingLocationsUpdateLodgingRequest) -> operations.MybusinesslodgingLocationsUpdateLodgingResponse:
        r"""Updates the Lodging of a specific location.
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

        res = operations.MybusinesslodgingLocationsUpdateLodgingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Lodging])
                res.lodging = out

        return res

    