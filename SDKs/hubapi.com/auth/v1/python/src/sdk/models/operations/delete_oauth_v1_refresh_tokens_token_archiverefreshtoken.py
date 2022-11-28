from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest:
    path_params: DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams = field()
    

@dataclass
class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
