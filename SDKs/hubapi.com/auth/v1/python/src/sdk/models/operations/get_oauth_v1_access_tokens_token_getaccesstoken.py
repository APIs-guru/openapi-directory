from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOauthV1AccessTokensTokenGetAccessTokenPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOauthV1AccessTokensTokenGetAccessTokenRequest:
    path_params: GetOauthV1AccessTokensTokenGetAccessTokenPathParams = field()
    

@dataclass
class GetOauthV1AccessTokensTokenGetAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    access_token_info_response: Optional[shared.AccessTokenInfoResponse] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
