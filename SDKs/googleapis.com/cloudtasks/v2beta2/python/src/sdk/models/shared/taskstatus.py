from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskStatus:
    r"""TaskStatus
    Status of the task.
    """
    
    attempt_dispatch_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptDispatchCount') }})
    attempt_response_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptResponseCount') }})
    first_attempt_status: Optional[AttemptStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAttemptStatus') }})
    last_attempt_status: Optional[AttemptStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttemptStatus') }})
    
