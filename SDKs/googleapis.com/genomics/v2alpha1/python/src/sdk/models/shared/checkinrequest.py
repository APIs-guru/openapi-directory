from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckInRequest:
    r"""CheckInRequest
    The parameters to the CheckIn method.
    """
    
    deadline_expired: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadlineExpired') }})
    event: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    events: Optional[List[TimestampedEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    result: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    sos_report: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sosReport') }})
    worker_status: Optional[WorkerStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerStatus') }})
    
