from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttemptStatus:
    r"""AttemptStatus
    The status of a task attempt.
    """
    
    dispatch_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchTime') }})
    response_status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseStatus') }})
    response_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseTime') }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    
