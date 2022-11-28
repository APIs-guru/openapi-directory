from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmAuthenticationExecutionsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationExecutionsRequest:
    path_params: PostRealmAuthenticationExecutionsPathParams = field()
    request: shared.AuthenticationExecutionRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationExecutionsResponse:
    content_type: str = field()
    status_code: int = field()
    
