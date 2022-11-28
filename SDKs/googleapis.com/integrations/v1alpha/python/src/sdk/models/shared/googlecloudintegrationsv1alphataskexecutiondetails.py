from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudIntegrationsV1alphaTaskExecutionDetails
    Contains the details of the execution of this task.
    """
    
    task_attempt_stats: Optional[List[GoogleCloudIntegrationsV1alphaAttemptStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskAttemptStats') }})
    task_execution_state: Optional[GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskExecutionState') }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskNumber') }})
    
