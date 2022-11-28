from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AcknowledgeTaskRequest:
    r"""AcknowledgeTaskRequest
    Request message for acknowledging a task using AcknowledgeTask.
    """
    
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    
