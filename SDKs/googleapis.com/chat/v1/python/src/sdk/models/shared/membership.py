from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Membership
    Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    member: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[MembershipRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    state: Optional[MembershipStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
