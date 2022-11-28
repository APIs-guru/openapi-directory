from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class User:
    r"""User
    A single user in Display & Video 360.
    """
    
    assigned_user_roles: Optional[List[AssignedUserRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedUserRoles') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclass
class UserInput:
    r"""UserInput
    A single user in Display & Video 360.
    """
    
    assigned_user_roles: Optional[List[AssignedUserRoleInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedUserRoles') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    
