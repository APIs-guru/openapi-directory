from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Redirect:
    glob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glob' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
