from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmClientScopesPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientScopesRequest:
    path_params: PostRealmClientScopesPathParams = field()
    request: shared.ClientScopeRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientScopesResponse:
    content_type: str = field()
    status_code: int = field()
    
