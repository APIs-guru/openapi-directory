from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprototaskexecutiondetailstaskattemptstats

class EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    PENDING_EXECUTION = "PENDING_EXECUTION"
    IN_PROCESS = "IN_PROCESS"
    SUCCEED = "SUCCEED"
    FAILED = "FAILED"
    FATAL = "FATAL"
    RETRY_ON_HOLD = "RETRY_ON_HOLD"
    SKIPPED = "SKIPPED"
    CANCELED = "CANCELED"
    PENDING_ROLLBACK = "PENDING_ROLLBACK"
    ROLLBACK_IN_PROCESS = "ROLLBACK_IN_PROCESS"
    ROLLEDBACK = "ROLLEDBACK"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTaskExecutionDetails:
    task_attempt_stats: Optional[List[enterprisecrmeventbusprototaskexecutiondetailstaskattemptstats.EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskAttemptStats' }})
    task_execution_state: Optional[EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskExecutionState' }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskNumber' }})
    
