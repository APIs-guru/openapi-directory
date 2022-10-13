from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmClientsIDRolesRoleNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(default=None, metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmClientsIDRolesRoleNameRequest:
    path_params: PutRealmClientsIDRolesRoleNamePathParams = field(default=None)
    request: shared.RoleRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmClientsIDRolesRoleNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
