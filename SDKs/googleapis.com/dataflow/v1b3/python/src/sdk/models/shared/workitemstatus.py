from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkItemStatus:
    r"""WorkItemStatus
    Conveys a worker's progress through the work described by a WorkItem.
    """
    
    completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed') }})
    counter_updates: Optional[List[CounterUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counterUpdates') }})
    dynamic_source_split: Optional[DynamicSourceSplit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicSourceSplit') }})
    errors: Optional[List[Status]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    metric_updates: Optional[List[MetricUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricUpdates') }})
    progress: Optional[ApproximateProgress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    report_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportIndex') }})
    reported_progress: Optional[ApproximateReportedProgress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportedProgress') }})
    requested_lease_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedLeaseDuration') }})
    source_fork: Optional[SourceFork] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFork') }})
    source_operation_response: Optional[SourceOperationResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceOperationResponse') }})
    stop_position: Optional[Position] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopPosition') }})
    total_throttler_wait_time_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalThrottlerWaitTimeSeconds') }})
    work_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workItemId') }})
    
