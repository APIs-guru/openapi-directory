from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FourHundred:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    errors: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
