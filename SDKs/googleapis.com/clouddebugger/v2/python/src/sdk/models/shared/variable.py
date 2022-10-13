from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import variable
from . import statusmessage


@dataclass_json
@dataclass
class Variable:
    members: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[statusmessage.StatusMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    var_table_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'varTableIndex' }})
    
