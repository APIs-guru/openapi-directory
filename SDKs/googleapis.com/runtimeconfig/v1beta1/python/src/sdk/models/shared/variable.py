from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VariableStateEnum(str, Enum):
    VARIABLE_STATE_UNSPECIFIED = "VARIABLE_STATE_UNSPECIFIED"
    UPDATED = "UPDATED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class Variable:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[VariableStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
