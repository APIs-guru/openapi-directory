from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceCapability:
    availability: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    max_lag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_lag' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_type' }})
    speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speed' }})
    
