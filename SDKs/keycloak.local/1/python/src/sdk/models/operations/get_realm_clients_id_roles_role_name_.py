from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDRolesRoleNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDRolesRoleNameRequest:
    path_params: GetRealmClientsIDRolesRoleNamePathParams = field()
    

@dataclass
class GetRealmClientsIDRolesRoleNameResponse:
    content_type: str = field()
    status_code: int = field()
    role_representation: Optional[shared.RoleRepresentation] = field(default=None)
    
