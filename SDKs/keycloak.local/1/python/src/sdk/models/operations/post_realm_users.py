from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmUsersPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersRequest:
    path_params: PostRealmUsersPathParams = field(default=None)
    request: shared.UserRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
