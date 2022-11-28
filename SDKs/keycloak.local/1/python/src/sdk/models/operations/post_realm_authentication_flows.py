from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmAuthenticationFlowsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationFlowsRequest:
    path_params: PostRealmAuthenticationFlowsPathParams = field()
    request: shared.AuthenticationFlowRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationFlowsResponse:
    content_type: str = field()
    status_code: int = field()
    
