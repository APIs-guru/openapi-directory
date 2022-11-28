from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutRealmRolesRoleNameManagementPermissionsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmRolesRoleNameManagementPermissionsRequest:
    path_params: PutRealmRolesRoleNameManagementPermissionsPathParams = field()
    request: shared.ManagementPermissionReference = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmRolesRoleNameManagementPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    
