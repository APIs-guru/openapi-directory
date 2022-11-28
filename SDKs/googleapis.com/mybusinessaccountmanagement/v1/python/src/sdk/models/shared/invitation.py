from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InvitationRoleEnum(str, Enum):
    ADMIN_ROLE_UNSPECIFIED = "ADMIN_ROLE_UNSPECIFIED"
    PRIMARY_OWNER = "PRIMARY_OWNER"
    OWNER = "OWNER"
    MANAGER = "MANAGER"
    SITE_MANAGER = "SITE_MANAGER"

class InvitationTargetTypeEnum(str, Enum):
    TARGET_TYPE_UNSPECIFIED = "TARGET_TYPE_UNSPECIFIED"
    ACCOUNTS_ONLY = "ACCOUNTS_ONLY"
    LOCATIONS_ONLY = "LOCATIONS_ONLY"


@dataclass_json
@dataclass
class Invitation:
    r"""Invitation
    Represents a pending invitation.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[InvitationRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    target_account: Optional[Account] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAccount') }})
    target_location: Optional[TargetLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLocation') }})
    target_type: Optional[InvitationTargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    
