from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ErrorModelStatusEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class ErrorModel:
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: Optional[ErrorModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
