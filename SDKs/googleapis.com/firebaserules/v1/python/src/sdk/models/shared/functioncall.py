from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FunctionCall:
    args: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'function' }})
    
