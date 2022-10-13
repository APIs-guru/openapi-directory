from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmRolesPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmRolesRequest:
    path_params: PostRealmRolesPathParams = field(default=None)
    request: shared.RoleRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmRolesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
