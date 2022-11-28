from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmRolesRoleNameManagementPermissionsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmRolesRoleNameManagementPermissionsRequest:
    path_params: GetRealmRolesRoleNameManagementPermissionsPathParams = field()
    

@dataclass
class GetRealmRolesRoleNameManagementPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    
