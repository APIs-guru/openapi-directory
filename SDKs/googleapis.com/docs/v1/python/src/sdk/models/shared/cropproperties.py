from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CropProperties:
    angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'angle' }})
    offset_bottom: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetBottom' }})
    offset_left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetLeft' }})
    offset_right: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetRight' }})
    offset_top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetTop' }})
    
