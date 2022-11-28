from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutRealmClientsIDRolesRoleNameManagementPermissionsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmClientsIDRolesRoleNameManagementPermissionsRequest:
    path_params: PutRealmClientsIDRolesRoleNameManagementPermissionsPathParams = field()
    request: shared.ManagementPermissionReference = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmClientsIDRolesRoleNameManagementPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    
