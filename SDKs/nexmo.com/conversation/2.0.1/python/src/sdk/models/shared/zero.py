from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Zero:
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
