from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import variable
from . import variable
from . import sourcelocation


@dataclass_json
@dataclass
class StackFrame:
    arguments: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arguments' }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'function' }})
    locals: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locals' }})
    location: Optional[sourcelocation.SourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    
