from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MembershipStateCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    SERVICE_UPDATING = "SERVICE_UPDATING"


@dataclass_json
@dataclass
class MembershipState:
    r"""MembershipState
    MembershipState describes the state of a Membership resource.
    """
    
    code: Optional[MembershipStateCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    
