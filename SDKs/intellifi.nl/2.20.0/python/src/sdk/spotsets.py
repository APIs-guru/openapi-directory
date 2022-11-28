import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Spotsets:
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

    
    def get_spotsets(self) -> operations.GetSpotsetsResponse:
        r"""Get spotsets
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spotsets"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpotsetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpotSet])
                res.spot_set = out

        return res

    
    def get_spotsets_id_(self, request: operations.GetSpotsetsIDRequest) -> operations.GetSpotsetsIDResponse:
        r"""Get spotset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spotsets/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpotsetsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpotSet])
                res.spot_set = out

        return res

    
    def post_spotsets(self, request: operations.PostSpotsetsRequest) -> operations.PostSpotsetsResponse:
        r"""Create spotset
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/spotsets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSpotsetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def put_spotsets_id_(self, request: operations.PutSpotsetsIDRequest) -> operations.PutSpotsetsIDResponse:
        r"""Update existing spotset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/spotsets/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSpotsetsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    