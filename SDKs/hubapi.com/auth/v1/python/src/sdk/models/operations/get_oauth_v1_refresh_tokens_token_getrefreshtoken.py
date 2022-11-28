from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOauthV1RefreshTokensTokenGetRefreshTokenRequest:
    path_params: GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams = field()
    

@dataclass
class GetOauthV1RefreshTokensTokenGetRefreshTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    refresh_token_info_response: Optional[shared.RefreshTokenInfoResponse] = field(default=None)
    
