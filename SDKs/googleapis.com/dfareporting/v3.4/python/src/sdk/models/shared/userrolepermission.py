from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserRolePermissionAvailabilityEnum(str, Enum):
    NOT_AVAILABLE_BY_DEFAULT = "NOT_AVAILABLE_BY_DEFAULT"
    ACCOUNT_BY_DEFAULT = "ACCOUNT_BY_DEFAULT"
    SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT = "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT"
    ACCOUNT_ALWAYS = "ACCOUNT_ALWAYS"
    SUBACCOUNT_AND_ACCOUNT_ALWAYS = "SUBACCOUNT_AND_ACCOUNT_ALWAYS"
    USER_PROFILE_ONLY = "USER_PROFILE_ONLY"


@dataclass_json
@dataclass
class UserRolePermission:
    r"""UserRolePermission
    Contains properties of a user role permission.
    """
    
    availability: Optional[UserRolePermissionAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permission_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionGroupId') }})
    
