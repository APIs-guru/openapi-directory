from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmComponentsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmComponentsRequest:
    path_params: PostRealmComponentsPathParams = field(default=None)
    request: shared.ComponentRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmComponentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
