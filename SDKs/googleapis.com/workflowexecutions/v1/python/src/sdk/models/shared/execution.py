from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import error
from . import status

class ExecutionCallLogLevelEnum(str, Enum):
    CALL_LOG_LEVEL_UNSPECIFIED = "CALL_LOG_LEVEL_UNSPECIFIED"
    LOG_ALL_CALLS = "LOG_ALL_CALLS"
    LOG_ERRORS_ONLY = "LOG_ERRORS_ONLY"

class ExecutionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class Execution:
    argument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'argument' }})
    call_log_level: Optional[ExecutionCallLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callLogLevel' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[ExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    workflow_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowRevisionId' }})
    
