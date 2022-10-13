from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmRolesRoleNamePathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(default=None, metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmRolesRoleNameRequest:
    path_params: PutRealmRolesRoleNamePathParams = field(default=None)
    request: shared.RoleRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmRolesRoleNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
