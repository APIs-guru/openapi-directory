from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostUsersUserEmailPermissionsPermissionNamePathParams:
    permission_name: shared.PermissionNameEnum = field(metadata={'path_param': { 'field_name': 'permissionName', 'style': 'simple', 'explode': False }})
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserEmailPermissionsPermissionNameRequest:
    path_params: PostUsersUserEmailPermissionsPermissionNamePathParams = field()
    

@dataclass
class PostUsersUserEmailPermissionsPermissionNameResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
