from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Error:
    details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    error_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorTime' }})
    error_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorUuid' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
