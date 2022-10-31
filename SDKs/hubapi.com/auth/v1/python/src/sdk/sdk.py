import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.hubapi.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def delete_oauth_v1_refresh_tokens_token_archive_refresh_token(self, request: operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest) -> operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/oauth/v1/refresh-tokens/{token}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_oauth_v1_access_tokens_token_get_access_token(self, request: operations.GetOauthV1AccessTokensTokenGetAccessTokenRequest) -> operations.GetOauthV1AccessTokensTokenGetAccessTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/oauth/v1/access-tokens/{token}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOauthV1AccessTokensTokenGetAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccessTokenInfoResponse])
                res.access_token_info_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_oauth_v1_refresh_tokens_token_get_refresh_token(self, request: operations.GetOauthV1RefreshTokensTokenGetRefreshTokenRequest) -> operations.GetOauthV1RefreshTokensTokenGetRefreshTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/oauth/v1/refresh-tokens/{token}", request.path_params)

        client = self.client

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

    
    def post_oauth_v1_token_create_token(self, request: operations.PostOauthV1TokenCreateTokenRequest) -> operations.PostOauthV1TokenCreateTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/oauth/v1/token"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOauthV1TokenCreateTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TokenResponseIf])
                res.token_response_if = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    