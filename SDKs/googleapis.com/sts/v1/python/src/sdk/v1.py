import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class V1:
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

    
    def sts_introspect(self, request: operations.StsIntrospectRequest) -> operations.StsIntrospectResponse:
        r"""Gets information about a Google OAuth 2.0 access token issued by the Google Cloud [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/introspect"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StsIntrospectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIdentityStsV1IntrospectTokenResponse])
                res.google_identity_sts_v1_introspect_token_response = out

        return res

    
    def sts_token(self, request: operations.StsTokenRequest) -> operations.StsTokenResponse:
        r"""Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundary at the moment. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StsTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleIdentityStsV1ExchangeTokenResponse])
                res.google_identity_sts_v1_exchange_token_response = out

        return res

    