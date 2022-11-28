from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutRealmRolesByIDRoleIDManagementPermissionsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_id: str = field(metadata={'path_param': { 'field_name': 'role-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmRolesByIDRoleIDManagementPermissionsRequest:
    path_params: PutRealmRolesByIDRoleIDManagementPermissionsPathParams = field()
    request: shared.ManagementPermissionReference = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmRolesByIDRoleIDManagementPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    
