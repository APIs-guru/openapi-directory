from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPCacheControlResponseHeader:
    age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age' }})
    directive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directive' }})
    expires: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires' }})
    
