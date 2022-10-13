from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoConditionResult:
    current_task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentTaskNumber' }})
    next_task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTaskNumber' }})
    result: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
