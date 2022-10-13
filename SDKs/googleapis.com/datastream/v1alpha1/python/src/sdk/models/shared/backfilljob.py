from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import error

class BackfillJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    NOT_STARTED = "NOT_STARTED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    STOPPED = "STOPPED"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"
    UNSUPPORTED = "UNSUPPORTED"

class BackfillJobTriggerEnum(str, Enum):
    TRIGGER_UNSPECIFIED = "TRIGGER_UNSPECIFIED"
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"


@dataclass_json
@dataclass
class BackfillJob:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    last_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEndTime' }})
    last_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStartTime' }})
    state: Optional[BackfillJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    trigger: Optional[BackfillJobTriggerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    
