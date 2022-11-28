from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmRolesPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmRolesRequest:
    path_params: PostRealmRolesPathParams = field()
    request: shared.RoleRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmRolesResponse:
    content_type: str = field()
    status_code: int = field()
    
