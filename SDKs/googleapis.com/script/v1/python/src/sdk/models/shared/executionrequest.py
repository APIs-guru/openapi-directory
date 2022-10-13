from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExecutionRequest:
    dev_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devMode' }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'function' }})
    parameters: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    session_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionState' }})
    
