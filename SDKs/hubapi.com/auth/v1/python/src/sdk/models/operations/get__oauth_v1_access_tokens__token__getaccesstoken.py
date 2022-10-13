from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOauthV1AccessTokensTokenGetAccessTokenPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOauthV1AccessTokensTokenGetAccessTokenRequest:
    path_params: GetOauthV1AccessTokensTokenGetAccessTokenPathParams = field(default=None)
    

@dataclass
class GetOauthV1AccessTokensTokenGetAccessTokenResponse:
    access_token_info_response: Optional[shared.AccessTokenInfoResponse] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
