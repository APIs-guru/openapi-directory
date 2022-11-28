import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class RefreshTokens:
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

    
    def delete_oauth_v1_refresh_tokens_token_archive_refresh_token(self, request: operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest) -> operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/oauth/v1/refresh-tokens/{token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_oauth_v1_refresh_tokens_token_get_refresh_token(self, request: operations.GetOauthV1RefreshTokensTokenGetRefreshTokenRequest) -> operations.GetOauthV1RefreshTokensTokenGetRefreshTokenResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/oauth/v1/refresh-tokens/{token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOauthV1RefreshTokensTokenGetRefreshTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RefreshTokenInfoResponse])
                res.refresh_token_info_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    