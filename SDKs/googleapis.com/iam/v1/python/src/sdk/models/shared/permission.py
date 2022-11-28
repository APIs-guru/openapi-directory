from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PermissionCustomRolesSupportLevelEnum(str, Enum):
    SUPPORTED = "SUPPORTED"
    TESTING = "TESTING"
    NOT_SUPPORTED = "NOT_SUPPORTED"

class PermissionStageEnum(str, Enum):
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclass
class Permission:
    r"""Permission
    A permission which can be included by a role.
    """
    
    api_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiDisabled') }})
    custom_roles_support_level: Optional[PermissionCustomRolesSupportLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRolesSupportLevel') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    only_in_predefined_roles: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyInPredefinedRoles') }})
    primary_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPermission') }})
    stage: Optional[PermissionStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
