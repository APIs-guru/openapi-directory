from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ControlResponseCommandEnum(str, Enum):
    CANCEL = "cancel"
    TRIGGER_NEXT_EVENT = "trigger_next_event"


@dataclass_json
@dataclass
class ControlResponse:
    r"""ControlResponse
    Success
    """
    
    command: Optional[ControlResponseCommandEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
