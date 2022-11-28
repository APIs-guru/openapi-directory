from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Border
    A border along a cell.
    """
    
    color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorStyle') }})
    style: Optional[BorderStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
