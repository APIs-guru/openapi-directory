from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaattemptstats

class GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum(str, Enum):
    TASK_EXECUTION_STATE_UNSPECIFIED = "TASK_EXECUTION_STATE_UNSPECIFIED"
    PENDING_EXECUTION = "PENDING_EXECUTION"
    IN_PROCESS = "IN_PROCESS"
    SUCCEED = "SUCCEED"
    FAILED = "FAILED"
    FATAL = "FATAL"
    RETRY_ON_HOLD = "RETRY_ON_HOLD"
    SKIPPED = "SKIPPED"
    CANCELLED = "CANCELLED"
    PENDING_ROLLBACK = "PENDING_ROLLBACK"
    ROLLBACK_IN_PROCESS = "ROLLBACK_IN_PROCESS"
    ROLLEDBACK = "ROLLEDBACK"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaTaskExecutionDetails:
    task_attempt_stats: Optional[List[googlecloudintegrationsv1alphaattemptstats.GoogleCloudIntegrationsV1alphaAttemptStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskAttemptStats' }})
    task_execution_state: Optional[GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskExecutionState' }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskNumber' }})
    
