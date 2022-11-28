import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Spots:
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

    
    def add_spot_set(self, request: operations.AddSpotSetRequest) -> operations.AddSpotSetResponse:
        r"""Create spotset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spots/{id}/sets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddSpotSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def get_spot_by_id(self, request: operations.GetSpotByIDRequest) -> operations.GetSpotByIDResponse:
        r"""Get spot
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spots/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpotByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpotGet])
                res.spot_get = out

        return res

    
    def get_spot_set_by_id(self, request: operations.GetSpotSetByIDRequest) -> operations.GetSpotSetByIDResponse:
        r"""Get spotset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spots/{id}/sets/{setId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpotSetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpotSet])
                res.spot_set = out

        return res

    
    def get_spot_sets_by_id(self, request: operations.GetSpotSetsByIDRequest) -> operations.GetSpotSetsByIDResponse:
        r"""Get spotsets
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spots/{id}/sets", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpotSetsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpotSet])
                res.spot_set = out

        return res

    
    def get_spots(self, request: operations.GetSpotsRequest) -> operations.GetSpotsResponse:
        r"""Get all spots
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spots"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpotsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSpots200ApplicationJSON])
                res.get_spots_200_application_json_object = out

        return res

    
    def update_spot(self, request: operations.UpdateSpotRequest) -> operations.UpdateSpotResponse:
        r"""Update existing spot
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spots/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSpotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def update_spot_set(self, request: operations.UpdateSpotSetRequest) -> operations.UpdateSpotSetResponse:
        r"""Update existing spotset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spots/{id}/sets/{setId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSpotSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    