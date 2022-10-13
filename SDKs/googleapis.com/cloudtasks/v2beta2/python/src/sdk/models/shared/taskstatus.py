from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attemptstatus
from . import attemptstatus


@dataclass_json
@dataclass
class TaskStatus:
    attempt_dispatch_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptDispatchCount' }})
    attempt_response_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptResponseCount' }})
    first_attempt_status: Optional[attemptstatus.AttemptStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAttemptStatus' }})
    last_attempt_status: Optional[attemptstatus.AttemptStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAttemptStatus' }})
    
