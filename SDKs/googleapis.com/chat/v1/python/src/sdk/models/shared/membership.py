from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import user

class MembershipRoleEnum(str, Enum):
    MEMBERSHIP_ROLE_UNSPECIFIED = "MEMBERSHIP_ROLE_UNSPECIFIED"
    ROLE_MEMBER = "ROLE_MEMBER"
    ROLE_MANAGER = "ROLE_MANAGER"

class MembershipStateEnum(str, Enum):
    MEMBERSHIP_STATE_UNSPECIFIED = "MEMBERSHIP_STATE_UNSPECIFIED"
    JOINED = "JOINED"
    INVITED = "INVITED"
    NOT_A_MEMBER = "NOT_A_MEMBER"


@dataclass_json
@dataclass
class Membership:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    member: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: Optional[MembershipRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    state: Optional[MembershipStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
