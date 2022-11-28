from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutRealmUsersManagementPermissionsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersManagementPermissionsRequest:
    path_params: PutRealmUsersManagementPermissionsPathParams = field()
    request: shared.ManagementPermissionReference = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmUsersManagementPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    
