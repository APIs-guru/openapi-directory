from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmAuthenticationExecutionsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationExecutionsRequest:
    path_params: PostRealmAuthenticationExecutionsPathParams = field(default=None)
    request: shared.AuthenticationExecutionRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationExecutionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
