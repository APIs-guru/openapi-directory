import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class WebResource:
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

    
    def site_verification_web_resource_delete(self, request: operations.SiteVerificationWebResourceDeleteRequest) -> operations.SiteVerificationWebResourceDeleteResponse:
        r"""Relinquish ownership of a website or domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webResource/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteVerificationWebResourceDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def site_verification_web_resource_get(self, request: operations.SiteVerificationWebResourceGetRequest) -> operations.SiteVerificationWebResourceGetResponse:
        r"""Get the most current data for a website or domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webResource/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteVerificationWebResourceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteVerificationWebResourceResource])
                res.site_verification_web_resource_resource = out

        return res

    
    def site_verification_web_resource_get_token(self, request: operations.SiteVerificationWebResourceGetTokenRequest) -> operations.SiteVerificationWebResourceGetTokenResponse:
        r"""Get a verification token for placing on a website or domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteVerificationWebResourceGetTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteVerificationWebResourceGettokenResponse])
                res.site_verification_web_resource_gettoken_response = out

        return res

    
    def site_verification_web_resource_insert(self, request: operations.SiteVerificationWebResourceInsertRequest) -> operations.SiteVerificationWebResourceInsertResponse:
        r"""Attempt verification of a website or domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webResource"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteVerificationWebResourceInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteVerificationWebResourceResource])
                res.site_verification_web_resource_resource = out

        return res

    
    def site_verification_web_resource_list(self, request: operations.SiteVerificationWebResourceListRequest) -> operations.SiteVerificationWebResourceListResponse:
        r"""Get the list of your verified websites and domains.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webResource"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteVerificationWebResourceListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteVerificationWebResourceListResponse])
                res.site_verification_web_resource_list_response = out

        return res

    
    def site_verification_web_resource_patch(self, request: operations.SiteVerificationWebResourcePatchRequest) -> operations.SiteVerificationWebResourcePatchResponse:
        r"""Modify the list of owners for your website or domain. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webResource/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteVerificationWebResourcePatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteVerificationWebResourceResource])
                res.site_verification_web_resource_resource = out

        return res

    
    def site_verification_web_resource_update(self, request: operations.SiteVerificationWebResourceUpdateRequest) -> operations.SiteVerificationWebResourceUpdateResponse:
        r"""Modify the list of owners for your website or domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webResource/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteVerificationWebResourceUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteVerificationWebResourceResource])
                res.site_verification_web_resource_resource = out

        return res

    