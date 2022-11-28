from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AdminRoleEnum(str, Enum):
    ADMIN_ROLE_UNSPECIFIED = "ADMIN_ROLE_UNSPECIFIED"
    PRIMARY_OWNER = "PRIMARY_OWNER"
    OWNER = "OWNER"
    MANAGER = "MANAGER"
    SITE_MANAGER = "SITE_MANAGER"


@dataclass_json
@dataclass
class AdminInput:
    r"""AdminInput
    An administrator of an Account or a location.
    """
    
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    admin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[AdminRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass_json
@dataclass
class Admin:
    r"""Admin
    An administrator of an Account or a location.
    """
    
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    admin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pending_invitation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingInvitation') }})
    role: Optional[AdminRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
