from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import account
from . import targetlocation

class InvitationRoleEnum(str, Enum):
    ADMIN_ROLE_UNSPECIFIED = "ADMIN_ROLE_UNSPECIFIED"
    OWNER = "OWNER"
    CO_OWNER = "CO_OWNER"
    MANAGER = "MANAGER"
    COMMUNITY_MANAGER = "COMMUNITY_MANAGER"


@dataclass_json
@dataclass
class Invitation:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: Optional[InvitationRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    target_account: Optional[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetAccount' }})
    target_location: Optional[targetlocation.TargetLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLocation' }})
    
