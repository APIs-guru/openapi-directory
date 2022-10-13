from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import task

class CreateTaskRequestResponseViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class CreateTaskRequest:
    response_view: Optional[CreateTaskRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseView' }})
    task: Optional[task.Task] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    
