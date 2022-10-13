from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UvIndexResult:
    from_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_time' }})
    from_uv: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_uv' }})
    to_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_time' }})
    to_uv: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_uv' }})
    
