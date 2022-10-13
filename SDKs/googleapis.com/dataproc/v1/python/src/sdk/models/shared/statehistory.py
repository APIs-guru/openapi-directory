from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class StateHistoryStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class StateHistory:
    state: Optional[StateHistoryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMessage' }})
    state_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateStartTime' }})
    
