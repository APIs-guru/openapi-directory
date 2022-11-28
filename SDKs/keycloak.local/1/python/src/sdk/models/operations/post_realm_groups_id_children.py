from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmGroupsIDChildrenPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmGroupsIDChildrenRequest:
    path_params: PostRealmGroupsIDChildrenPathParams = field()
    request: shared.GroupRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmGroupsIDChildrenResponse:
    content_type: str = field()
    status_code: int = field()
    
