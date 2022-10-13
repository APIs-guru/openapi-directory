from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import workerhealthreportresponse


@dataclass_json
@dataclass
class WorkerMessageResponse:
    worker_health_report_response: Optional[workerhealthreportresponse.WorkerHealthReportResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerHealthReportResponse' }})
    worker_metrics_response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerMetricsResponse' }})
    worker_shutdown_notice_response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerShutdownNoticeResponse' }})
    
