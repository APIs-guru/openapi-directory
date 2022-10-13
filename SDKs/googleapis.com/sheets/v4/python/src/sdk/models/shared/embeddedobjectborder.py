from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle


@dataclass_json
@dataclass
class EmbeddedObjectBorder:
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorStyle' }})
    
