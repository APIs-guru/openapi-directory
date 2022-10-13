from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CropProperties:
    angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'angle' }})
    bottom_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottomOffset' }})
    left_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leftOffset' }})
    right_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rightOffset' }})
    top_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topOffset' }})
    
