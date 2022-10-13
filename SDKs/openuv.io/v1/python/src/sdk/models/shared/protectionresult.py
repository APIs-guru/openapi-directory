from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProtectionResult:
    ozone: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ozone' }})
    ozone_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ozone_time' }})
    uv: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uv' }})
    uv_max: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uv_max' }})
    uv_max_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uv_max_time' }})
    uv_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uv_time' }})
    
