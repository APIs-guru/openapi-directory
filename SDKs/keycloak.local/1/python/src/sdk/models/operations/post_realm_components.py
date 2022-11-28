from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmComponentsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmComponentsRequest:
    path_params: PostRealmComponentsPathParams = field()
    request: shared.ComponentRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmComponentsResponse:
    content_type: str = field()
    status_code: int = field()
    
