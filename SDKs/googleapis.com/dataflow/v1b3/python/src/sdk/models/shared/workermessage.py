from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkerMessage:
    r"""WorkerMessage
    WorkerMessage provides information to the backend about a worker.
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    worker_health_report: Optional[WorkerHealthReport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerHealthReport') }})
    worker_lifecycle_event: Optional[WorkerLifecycleEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerLifecycleEvent') }})
    worker_message_code: Optional[WorkerMessageCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerMessageCode') }})
    worker_metrics: Optional[ResourceUtilizationReport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerMetrics') }})
    worker_shutdown_notice: Optional[WorkerShutdownNotice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerShutdownNotice') }})
    
