from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color


@dataclass_json
@dataclass
class LightSettings:
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    light_off_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lightOffDuration' }})
    light_on_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lightOnDuration' }})
    
