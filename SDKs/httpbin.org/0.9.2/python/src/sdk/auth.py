import requests
from sdk.models import operations
from . import utils

class Auth:
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

    
    def get_basic_auth_user_passwd_(self, request: operations.GetBasicAuthUserPasswdRequest) -> operations.GetBasicAuthUserPasswdResponse:
        r"""Prompts the user for authorization using HTTP Basic Auth.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/basic-auth/{user}/{passwd}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBasicAuthUserPasswdResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_bearer(self, request: operations.GetBearerRequest) -> operations.GetBearerResponse:
        r"""Prompts the user for authorization using bearer authentication.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bearer"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBearerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_digest_auth_qop_user_passwd_(self, request: operations.GetDigestAuthQopUserPasswdRequest) -> operations.GetDigestAuthQopUserPasswdResponse:
        r"""Prompts the user for authorization using Digest Auth.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/digest-auth/{qop}/{user}/{passwd}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDigestAuthQopUserPasswdResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_digest_auth_qop_user_passwd_algorithm_(self, request: operations.GetDigestAuthQopUserPasswdAlgorithmRequest) -> operations.GetDigestAuthQopUserPasswdAlgorithmResponse:
        r"""Prompts the user for authorization using Digest Auth + Algorithm.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/digest-auth/{qop}/{user}/{passwd}/{algorithm}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDigestAuthQopUserPasswdAlgorithmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_digest_auth_qop_user_passwd_algorithm_stale_after_(self, request: operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest) -> operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse:
        r"""Prompts the user for authorization using Digest Auth + Algorithm.
        allow settings the stale_after argument.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/digest-auth/{qop}/{user}/{passwd}/{algorithm}/{stale_after}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_hidden_basic_auth_user_passwd_(self, request: operations.GetHiddenBasicAuthUserPasswdRequest) -> operations.GetHiddenBasicAuthUserPasswdResponse:
        r"""Prompts the user for authorization using HTTP Basic Auth.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hidden-basic-auth/{user}/{passwd}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHiddenBasicAuthUserPasswdResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    