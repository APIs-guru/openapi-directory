from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutRealmRolesRoleNameManagementPermissionsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(default=None, metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmRolesRoleNameManagementPermissionsRequest:
    path_params: PutRealmRolesRoleNameManagementPermissionsPathParams = field(default=None)
    request: shared.ManagementPermissionReference = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmRolesRoleNameManagementPermissionsResponse:
    content_type: str = field(default=None)
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    status_code: int = field(default=None)
    
