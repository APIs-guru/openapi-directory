from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOauthV1RefreshTokensTokenGetRefreshTokenRequest:
    path_params: GetOauthV1RefreshTokensTokenGetRefreshTokenPathParams = field(default=None)
    

@dataclass
class GetOauthV1RefreshTokensTokenGetRefreshTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    refresh_token_info_response: Optional[shared.RefreshTokenInfoResponse] = field(default=None)
    status_code: int = field(default=None)
    
