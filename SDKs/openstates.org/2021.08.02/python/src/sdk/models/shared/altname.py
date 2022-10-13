from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AltName:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    note: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    
