from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    RETRY_ON_HOLD = "RETRY_ON_HOLD"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecutionDetails:
    r"""GoogleCloudIntegrationsV1alphaExecutionDetails
    Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.
    """
    
    attempt_stats: Optional[List[GoogleCloudIntegrationsV1alphaAttemptStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptStats') }})
    execution_snapshots: Optional[List[GoogleCloudIntegrationsV1alphaExecutionSnapshot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSnapshots') }})
    state: Optional[GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
