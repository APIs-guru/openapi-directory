from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WorkItemDetailsStateEnum(str, Enum):
    EXECUTION_STATE_UNKNOWN = "EXECUTION_STATE_UNKNOWN"
    EXECUTION_STATE_NOT_STARTED = "EXECUTION_STATE_NOT_STARTED"
    EXECUTION_STATE_RUNNING = "EXECUTION_STATE_RUNNING"
    EXECUTION_STATE_SUCCEEDED = "EXECUTION_STATE_SUCCEEDED"
    EXECUTION_STATE_FAILED = "EXECUTION_STATE_FAILED"
    EXECUTION_STATE_CANCELLED = "EXECUTION_STATE_CANCELLED"


@dataclass_json
@dataclass
class WorkItemDetails:
    r"""WorkItemDetails
    Information about an individual work item execution.
    """
    
    attempt_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptId') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    metrics: Optional[List[MetricUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    progress: Optional[ProgressTimeseries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[WorkItemDetailsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    straggler_info: Optional[StragglerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stragglerInfo') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    
