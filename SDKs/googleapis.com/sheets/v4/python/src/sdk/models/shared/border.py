from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle

class BorderStyleEnum(str, Enum):
    STYLE_UNSPECIFIED = "STYLE_UNSPECIFIED"
    DOTTED = "DOTTED"
    DASHED = "DASHED"
    SOLID = "SOLID"
    SOLID_MEDIUM = "SOLID_MEDIUM"
    SOLID_THICK = "SOLID_THICK"
    NONE = "NONE"
    DOUBLE = "DOUBLE"


@dataclass_json
@dataclass
class Border:
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorStyle' }})
    style: Optional[BorderStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
