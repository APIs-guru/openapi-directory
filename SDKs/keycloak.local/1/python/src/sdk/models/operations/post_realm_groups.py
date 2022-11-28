from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmGroupsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmGroupsRequest:
    path_params: PostRealmGroupsPathParams = field()
    request: shared.GroupRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    
