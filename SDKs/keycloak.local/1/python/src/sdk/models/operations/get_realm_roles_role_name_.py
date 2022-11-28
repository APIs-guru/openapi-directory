from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmRolesRoleNamePathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRolesRoleNameRequest:
    path_params: GetRealmRolesRoleNamePathParams = field()
    

@dataclass
class GetRealmRolesRoleNameResponse:
    content_type: str = field()
    status_code: int = field()
    role_representation: Optional[shared.RoleRepresentation] = field(default=None)
    
