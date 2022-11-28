from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RunTaskRequestResponseViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class RunTaskRequest:
    r"""RunTaskRequest
    Request message for forcing a task to run now using RunTask.
    """
    
    response_view: Optional[RunTaskRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseView') }})
    
