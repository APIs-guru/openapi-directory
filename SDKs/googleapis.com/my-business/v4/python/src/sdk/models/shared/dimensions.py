from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Dimensions:
    height_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightPixels' }})
    width_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widthPixels' }})
    
