from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import counterupdate
from . import dynamicsourcesplit
from . import status
from . import metricupdate
from . import approximateprogress
from . import approximatereportedprogress
from . import sourcefork
from . import sourceoperationresponse
from . import position


@dataclass_json
@dataclass
class WorkItemStatus:
    completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed' }})
    counter_updates: Optional[List[counterupdate.CounterUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counterUpdates' }})
    dynamic_source_split: Optional[dynamicsourcesplit.DynamicSourceSplit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicSourceSplit' }})
    errors: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    metric_updates: Optional[List[metricupdate.MetricUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricUpdates' }})
    progress: Optional[approximateprogress.ApproximateProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    report_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportIndex' }})
    reported_progress: Optional[approximatereportedprogress.ApproximateReportedProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportedProgress' }})
    requested_lease_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedLeaseDuration' }})
    source_fork: Optional[sourcefork.SourceFork] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceFork' }})
    source_operation_response: Optional[sourceoperationresponse.SourceOperationResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceOperationResponse' }})
    stop_position: Optional[position.Position] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopPosition' }})
    total_throttler_wait_time_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalThrottlerWaitTimeSeconds' }})
    work_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workItemId' }})
    
