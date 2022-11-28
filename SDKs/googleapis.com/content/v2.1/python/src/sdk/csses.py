import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Csses:
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

    
    def content_csses_get(self, request: operations.ContentCssesGetRequest) -> operations.ContentCssesGetResponse:
        r"""Retrieves a single CSS domain by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{cssGroupId}/csses/{cssDomainId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentCssesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CSS])
                res.css = out

        return res

    
    def content_csses_list(self, request: operations.ContentCssesListRequest) -> operations.ContentCssesListResponse:
        r"""Lists CSS domains affiliated with a CSS group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{cssGroupId}/csses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentCssesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCssesResponse])
                res.list_csses_response = out

        return res

    
    def content_csses_updatelabels(self, request: operations.ContentCssesUpdatelabelsRequest) -> operations.ContentCssesUpdatelabelsResponse:
        r"""Updates labels that are assigned to a CSS domain by its CSS group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{cssGroupId}/csses/{cssDomainId}/updatelabels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentCssesUpdatelabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CSS])
                res.css = out

        return res

    