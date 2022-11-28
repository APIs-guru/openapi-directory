from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StageSummaryStateEnum(str, Enum):
    EXECUTION_STATE_UNKNOWN = "EXECUTION_STATE_UNKNOWN"
    EXECUTION_STATE_NOT_STARTED = "EXECUTION_STATE_NOT_STARTED"
    EXECUTION_STATE_RUNNING = "EXECUTION_STATE_RUNNING"
    EXECUTION_STATE_SUCCEEDED = "EXECUTION_STATE_SUCCEEDED"
    EXECUTION_STATE_FAILED = "EXECUTION_STATE_FAILED"
    EXECUTION_STATE_CANCELLED = "EXECUTION_STATE_CANCELLED"


@dataclass_json
@dataclass
class StageSummary:
    r"""StageSummary
    Information about a particular execution stage of a job.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    metrics: Optional[List[MetricUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    progress: Optional[ProgressTimeseries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    stage_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageId') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[StageSummaryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    straggler_summary: Optional[StragglerSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stragglerSummary') }})
    
