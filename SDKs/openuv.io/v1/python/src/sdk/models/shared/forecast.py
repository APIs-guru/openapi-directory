from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Forecast:
    uv: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uv' }})
    uv_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uv_time' }})
    
