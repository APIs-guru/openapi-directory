from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Color:
    brightness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brightness' }})
    contrast: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contrast' }})
    saturation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saturation' }})
    
