from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkEditAssignedUserRolesRequestInput:
    r"""BulkEditAssignedUserRolesRequestInput
    Request message for BulkEditAssignedUserRoles.
    """
    
    created_assigned_user_roles: Optional[List[AssignedUserRoleInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAssignedUserRoles') }})
    deleted_assigned_user_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedAssignedUserRoles') }})
    
