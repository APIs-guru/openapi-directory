from dataclasses import dataclass, field



@dataclass
class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest:
    path_params: DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenPathParams = field(default=None)
    

@dataclass
class DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
