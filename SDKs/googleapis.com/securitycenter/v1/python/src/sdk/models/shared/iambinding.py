from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IamBindingActionEnum(str, Enum):
    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    ADD = "ADD"
    REMOVE = "REMOVE"


@dataclass_json
@dataclass
class IamBinding:
    r"""IamBinding
    Represents a particular IAM binding, which captures a member's role addition, removal, or state.
    """
    
    action: Optional[IamBindingActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
