from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmGroupsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmGroupsRequest:
    path_params: PostRealmGroupsPathParams = field(default=None)
    request: shared.GroupRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmGroupsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
