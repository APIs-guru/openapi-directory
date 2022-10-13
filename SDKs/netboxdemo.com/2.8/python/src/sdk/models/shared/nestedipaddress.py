from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NestedIPAddress:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
