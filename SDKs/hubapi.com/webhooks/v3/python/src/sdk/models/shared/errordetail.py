from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorDetail:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    context: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    in_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    sub_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subCategory' }})
    
