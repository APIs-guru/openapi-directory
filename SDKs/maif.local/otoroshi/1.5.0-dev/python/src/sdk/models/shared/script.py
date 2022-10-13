from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Script:
    code: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    desc: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
