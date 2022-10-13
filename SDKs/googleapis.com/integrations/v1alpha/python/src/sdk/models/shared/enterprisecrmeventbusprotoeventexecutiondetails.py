from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotoeventexecutiondetailseventattemptstats
from . import enterprisecrmeventbusprotoeventexecutionsnapshot

class EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    ON_HOLD = "ON_HOLD"
    IN_PROCESS = "IN_PROCESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELED = "CANCELED"
    RETRY_ON_HOLD = "RETRY_ON_HOLD"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoEventExecutionDetails:
    event_attempt_stats: Optional[List[enterprisecrmeventbusprotoeventexecutiondetailseventattemptstats.EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventAttemptStats' }})
    event_execution_snapshot: Optional[List[enterprisecrmeventbusprotoeventexecutionsnapshot.EnterpriseCrmEventbusProtoEventExecutionSnapshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventExecutionSnapshot' }})
    event_execution_state: Optional[EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventExecutionState' }})
    event_retries_from_beginning_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventRetriesFromBeginningCount' }})
    log_file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logFilePath' }})
    network_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkAddress' }})
    next_execution_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextExecutionTime' }})
    rye_lock_unheld_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ryeLockUnheldCount' }})
    
