from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AdminRoleEnum(str, Enum):
    ADMIN_ROLE_UNSPECIFIED = "ADMIN_ROLE_UNSPECIFIED"
    OWNER = "OWNER"
    CO_OWNER = "CO_OWNER"
    MANAGER = "MANAGER"
    COMMUNITY_MANAGER = "COMMUNITY_MANAGER"


@dataclass_json
@dataclass
class Admin:
    r"""Admin
    An administrator of an Account or a Location.
    """
    
    admin_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pending_invitation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingInvitation') }})
    role: Optional[AdminRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
