from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workerhealthreport
from . import workerlifecycleevent
from . import workermessagecode
from . import resourceutilizationreport
from . import workershutdownnotice


@dataclass_json
@dataclass
class WorkerMessage:
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    worker_health_report: Optional[workerhealthreport.WorkerHealthReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerHealthReport' }})
    worker_lifecycle_event: Optional[workerlifecycleevent.WorkerLifecycleEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerLifecycleEvent' }})
    worker_message_code: Optional[workermessagecode.WorkerMessageCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerMessageCode' }})
    worker_metrics: Optional[resourceutilizationreport.ResourceUtilizationReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerMetrics' }})
    worker_shutdown_notice: Optional[workershutdownnotice.WorkerShutdownNotice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerShutdownNotice' }})
    
