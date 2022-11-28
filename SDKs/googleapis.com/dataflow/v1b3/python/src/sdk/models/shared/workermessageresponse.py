from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkerMessageResponse:
    r"""WorkerMessageResponse
    A worker_message response allows the server to pass information to the sender.
    """
    
    worker_health_report_response: Optional[WorkerHealthReportResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerHealthReportResponse') }})
    worker_metrics_response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerMetricsResponse') }})
    worker_shutdown_notice_response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerShutdownNoticeResponse') }})
    
