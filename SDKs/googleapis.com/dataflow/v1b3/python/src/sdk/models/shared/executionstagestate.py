from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ExecutionStageStateExecutionStageStateEnum(str, Enum):
    JOB_STATE_UNKNOWN = "JOB_STATE_UNKNOWN"
    JOB_STATE_STOPPED = "JOB_STATE_STOPPED"
    JOB_STATE_RUNNING = "JOB_STATE_RUNNING"
    JOB_STATE_DONE = "JOB_STATE_DONE"
    JOB_STATE_FAILED = "JOB_STATE_FAILED"
    JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED"
    JOB_STATE_UPDATED = "JOB_STATE_UPDATED"
    JOB_STATE_DRAINING = "JOB_STATE_DRAINING"
    JOB_STATE_DRAINED = "JOB_STATE_DRAINED"
    JOB_STATE_PENDING = "JOB_STATE_PENDING"
    JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING"
    JOB_STATE_QUEUED = "JOB_STATE_QUEUED"
    JOB_STATE_RESOURCE_CLEANING_UP = "JOB_STATE_RESOURCE_CLEANING_UP"


@dataclass_json
@dataclass
class ExecutionStageState:
    current_state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentStateTime' }})
    execution_stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStageName' }})
    execution_stage_state: Optional[ExecutionStageStateExecutionStageStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStageState' }})
    
