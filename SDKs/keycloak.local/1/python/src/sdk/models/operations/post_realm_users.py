from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmUsersPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersRequest:
    path_params: PostRealmUsersPathParams = field()
    request: shared.UserRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmUsersResponse:
    content_type: str = field()
    status_code: int = field()
    
