from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userrolepermission


@dataclass_json
@dataclass
class UserRolePermissionsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    user_role_permissions: Optional[List[userrolepermission.UserRolePermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRolePermissions' }})
    
