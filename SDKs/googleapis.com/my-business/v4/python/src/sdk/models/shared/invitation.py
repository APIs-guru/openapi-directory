from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InvitationRoleEnum(str, Enum):
    ADMIN_ROLE_UNSPECIFIED = "ADMIN_ROLE_UNSPECIFIED"
    OWNER = "OWNER"
    CO_OWNER = "CO_OWNER"
    MANAGER = "MANAGER"
    COMMUNITY_MANAGER = "COMMUNITY_MANAGER"


@dataclass_json
@dataclass
class Invitation:
    r"""Invitation
    Output only. Represents a pending invitation.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[InvitationRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    target_account: Optional[Account] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAccount') }})
    target_location: Optional[TargetLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLocation') }})
    
