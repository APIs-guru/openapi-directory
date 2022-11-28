import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Validation:
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

    
    def get_badge(self, request: operations.GetBadgeRequest) -> operations.GetBadgeResponse:
        r"""Return a redirect to a badge svg file depending on a source definition's validity
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/badge"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBadgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 301:
            pass

        return res

    
    def validate(self, request: operations.ValidateRequest) -> operations.ValidateResponse:
        r"""Validate an OpenAPI 3.0.x definition supplied in the body of the request
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/validate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationResult])
                res.validation_result = out
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validate_400_application_json_any = out

        return res

    
    def validate_url(self, request: operations.ValidateURLRequest) -> operations.ValidateURLResponse:
        r"""Validate an OpenAPI 3.0.x definition
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/validate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ValidateURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationResult])
                res.validation_result = out
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content

        return res

    