from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Pad:
    bottom_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottomPixels' }})
    left_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leftPixels' }})
    right_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rightPixels' }})
    top_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topPixels' }})
    
