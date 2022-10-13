from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rgbcolor


@dataclass_json
@dataclass
class Color:
    rgb_color: Optional[rgbcolor.RgbColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rgbColor' }})
    
