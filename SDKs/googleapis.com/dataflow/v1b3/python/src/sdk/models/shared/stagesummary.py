from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricupdate
from . import progresstimeseries
from . import stragglersummary

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
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    metrics: Optional[List[metricupdate.MetricUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    progress: Optional[progresstimeseries.ProgressTimeseries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    stage_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageId' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[StageSummaryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    straggler_summary: Optional[stragglersummary.StragglerSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stragglerSummary' }})
    
