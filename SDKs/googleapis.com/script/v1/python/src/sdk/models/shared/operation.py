from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import status


@dataclass_json
@dataclass
class Operation:
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'done' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    
