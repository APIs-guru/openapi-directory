from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errormessage


@dataclass_json
@dataclass
class BadRequest:
    hints: Optional[List[errormessage.ErrorMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hints' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
