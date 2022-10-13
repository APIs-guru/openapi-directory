from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import timestampedevent
from . import status
from . import workerstatus


@dataclass_json
@dataclass
class CheckInRequest:
    deadline_expired: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadlineExpired' }})
    event: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    events: Optional[List[timestampedevent.TimestampedEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    result: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    sos_report: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sosReport' }})
    worker_status: Optional[workerstatus.WorkerStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerStatus' }})
    
