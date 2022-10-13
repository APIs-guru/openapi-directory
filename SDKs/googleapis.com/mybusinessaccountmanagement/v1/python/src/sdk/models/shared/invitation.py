from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import account
from . import targetlocation

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
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: Optional[InvitationRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    target_account: Optional[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetAccount' }})
    target_location: Optional[targetlocation.TargetLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLocation' }})
    target_type: Optional[InvitationTargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetType' }})
    
