from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceInfo:
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
