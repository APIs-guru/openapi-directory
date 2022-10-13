from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class JobStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    SETUP_DONE = "SETUP_DONE"
    RUNNING = "RUNNING"
    CANCEL_PENDING = "CANCEL_PENDING"
    CANCEL_STARTED = "CANCEL_STARTED"
    CANCELLED = "CANCELLED"
    DONE = "DONE"
    ERROR = "ERROR"
    ATTEMPT_FAILURE = "ATTEMPT_FAILURE"

class JobStatusSubstateEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SUBMITTED = "SUBMITTED"
    QUEUED = "QUEUED"
    STALE_STATUS = "STALE_STATUS"


@dataclass_json
@dataclass
class JobStatus:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    state: Optional[JobStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateStartTime' }})
    substate: Optional[JobStatusSubstateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'substate' }})
    
