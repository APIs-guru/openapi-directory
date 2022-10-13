from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class StatusCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    OK = "OK"
    FAILED = "FAILED"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclass
class Status:
    code: Optional[StatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
