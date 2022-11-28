from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReplicationCycleStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"


@dataclass_json
@dataclass
class ReplicationCycle:
    r"""ReplicationCycle
    ReplicationCycle contains information about the current replication cycle status.
    """
    
    cycle_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycleNumber') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressPercent') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[ReplicationCycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    steps: Optional[List[CycleStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    total_pause_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPauseDuration') }})
    
