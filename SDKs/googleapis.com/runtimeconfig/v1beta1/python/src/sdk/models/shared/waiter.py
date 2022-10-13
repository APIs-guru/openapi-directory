from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import status
from . import endcondition
from . import endcondition


@dataclass_json
@dataclass
class Waiter:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'done' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    failure: Optional[endcondition.EndCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    success: Optional[endcondition.EndCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
