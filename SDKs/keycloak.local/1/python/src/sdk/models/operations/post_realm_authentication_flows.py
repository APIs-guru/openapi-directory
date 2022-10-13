from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmAuthenticationFlowsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationFlowsRequest:
    path_params: PostRealmAuthenticationFlowsPathParams = field(default=None)
    request: shared.AuthenticationFlowRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationFlowsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
