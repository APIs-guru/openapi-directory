from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreateTaskRequestResponseViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class CreateTaskRequest:
    r"""CreateTaskRequest
    Request message for CreateTask.
    """
    
    response_view: Optional[CreateTaskRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseView') }})
    task: Optional[Task] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    
