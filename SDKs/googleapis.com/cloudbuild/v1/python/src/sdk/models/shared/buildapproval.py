from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BuildApprovalStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class BuildApprovalInput:
    r"""BuildApprovalInput
    BuildApproval describes a build's approval configuration, state, and result.
    """
    
    config: Optional[ApprovalConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    result: Optional[ApprovalResultInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class BuildApproval:
    r"""BuildApproval
    BuildApproval describes a build's approval configuration, state, and result.
    """
    
    config: Optional[ApprovalConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    result: Optional[ApprovalResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    state: Optional[BuildApprovalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
