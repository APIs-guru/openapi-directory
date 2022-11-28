import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def iamcredentials_projects_service_accounts_generate_access_token(self, request: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest) -> operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse:
        r"""Generates an OAuth 2.0 access token for a service account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:generateAccessToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenerateAccessTokenResponse])
                res.generate_access_token_response = out

        return res

    
    def iamcredentials_projects_service_accounts_generate_id_token(self, request: operations.IamcredentialsProjectsServiceAccountsGenerateIDTokenRequest) -> operations.IamcredentialsProjectsServiceAccountsGenerateIDTokenResponse:
        r"""Generates an OpenID Connect ID token for a service account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:generateIdToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IamcredentialsProjectsServiceAccountsGenerateIDTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenerateIDTokenResponse])
                res.generate_id_token_response = out

        return res

    
    def iamcredentials_projects_service_accounts_sign_blob(self, request: operations.IamcredentialsProjectsServiceAccountsSignBlobRequest) -> operations.IamcredentialsProjectsServiceAccountsSignBlobResponse:
        r"""Signs a blob using a service account's system-managed private key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:signBlob", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IamcredentialsProjectsServiceAccountsSignBlobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SignBlobResponse])
                res.sign_blob_response = out

        return res

    
    def iamcredentials_projects_service_accounts_sign_jwt(self, request: operations.IamcredentialsProjectsServiceAccountsSignJwtRequest) -> operations.IamcredentialsProjectsServiceAccountsSignJwtResponse:
        r"""Signs a JWT using a service account's system-managed private key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:signJwt", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IamcredentialsProjectsServiceAccountsSignJwtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SignJwtResponse])
                res.sign_jwt_response = out

        return res

    