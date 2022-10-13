from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PostUsersUserEmailPermissionsPermissionNamePathParams:
    permission_name: shared.PermissionNameEnum = field(default=None, metadata={'path_param': { 'field_name': 'permissionName', 'style': 'simple', 'explode': False }})
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserEmailPermissionsPermissionNameRequest:
    path_params: PostUsersUserEmailPermissionsPermissionNamePathParams = field(default=None)
    

@dataclass
class PostUsersUserEmailPermissionsPermissionNameResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
