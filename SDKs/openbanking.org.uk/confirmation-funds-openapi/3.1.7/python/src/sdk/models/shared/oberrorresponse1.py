from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import oberror1


@dataclass_json
@dataclass
class ObErrorResponse1:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    errors: List[oberror1.ObError1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    
