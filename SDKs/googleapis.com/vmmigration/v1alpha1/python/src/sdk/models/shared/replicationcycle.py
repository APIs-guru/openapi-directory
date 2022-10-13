from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import cyclestep

class ReplicationCycleStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"


@dataclass_json
@dataclass
class ReplicationCycle:
    cycle_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycleNumber' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progressPercent' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[ReplicationCycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    steps: Optional[List[cyclestep.CycleStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    total_pause_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPauseDuration' }})
    
