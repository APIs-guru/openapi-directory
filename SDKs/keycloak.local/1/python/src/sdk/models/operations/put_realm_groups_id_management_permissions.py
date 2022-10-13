from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutRealmGroupsIDManagementPermissionsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmGroupsIDManagementPermissionsRequest:
    path_params: PutRealmGroupsIDManagementPermissionsPathParams = field(default=None)
    request: shared.ManagementPermissionReference = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmGroupsIDManagementPermissionsResponse:
    content_type: str = field(default=None)
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    status_code: int = field(default=None)
    
