from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InHeader:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    remove: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remove' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
