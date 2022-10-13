from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObError1:
    error_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
