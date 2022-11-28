from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkItemServiceState:
    r"""WorkItemServiceState
    The Dataflow service's idea of the current state of a WorkItem being processed by a worker.
    """
    
    complete_work_status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completeWorkStatus') }})
    harness_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('harnessData') }})
    hot_key_detection: Optional[HotKeyDetection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotKeyDetection') }})
    lease_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaseExpireTime') }})
    metric_short_id: Optional[List[MetricShortID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricShortId') }})
    next_report_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextReportIndex') }})
    report_status_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportStatusInterval') }})
    split_request: Optional[ApproximateSplitRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitRequest') }})
    suggested_stop_point: Optional[ApproximateProgress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedStopPoint') }})
    suggested_stop_position: Optional[Position] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedStopPosition') }})
    
