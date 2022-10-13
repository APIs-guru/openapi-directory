from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import hotkeydetection
from . import metricshortid
from . import approximatesplitrequest
from . import approximateprogress
from . import position


@dataclass_json
@dataclass
class WorkItemServiceState:
    complete_work_status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completeWorkStatus' }})
    harness_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'harnessData' }})
    hot_key_detection: Optional[hotkeydetection.HotKeyDetection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotKeyDetection' }})
    lease_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaseExpireTime' }})
    metric_short_id: Optional[List[metricshortid.MetricShortID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricShortId' }})
    next_report_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextReportIndex' }})
    report_status_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportStatusInterval' }})
    split_request: Optional[approximatesplitrequest.ApproximateSplitRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splitRequest' }})
    suggested_stop_point: Optional[approximateprogress.ApproximateProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedStopPoint' }})
    suggested_stop_position: Optional[position.Position] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedStopPosition' }})
    
