from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmClientsIDRolesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDRolesRequest:
    path_params: PostRealmClientsIDRolesPathParams = field(default=None)
    request: shared.RoleRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsIDRolesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
