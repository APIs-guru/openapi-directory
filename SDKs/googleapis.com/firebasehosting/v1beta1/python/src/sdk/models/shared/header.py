from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Header:
    glob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glob' }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    
