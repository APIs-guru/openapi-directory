from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmClientScopesPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientScopesRequest:
    path_params: PostRealmClientScopesPathParams = field(default=None)
    request: shared.ClientScopeRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientScopesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
