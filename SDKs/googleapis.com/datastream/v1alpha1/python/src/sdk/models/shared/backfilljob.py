from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""BackfillJob
    Represents a backfill job on a specific stream object.
    """
    
    errors: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    last_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEndTime') }})
    last_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStartTime') }})
    state: Optional[BackfillJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    trigger: Optional[BackfillJobTriggerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
