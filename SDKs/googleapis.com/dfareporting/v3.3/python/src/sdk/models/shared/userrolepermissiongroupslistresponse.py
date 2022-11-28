from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserRolePermissionGroupsListResponse:
    r"""UserRolePermissionGroupsListResponse
    User Role Permission Group List Response
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    user_role_permission_groups: Optional[List[UserRolePermissionGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRolePermissionGroups') }})
    
