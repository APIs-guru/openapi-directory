from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InterpolationPointTypeEnum(str, Enum):
    INTERPOLATION_POINT_TYPE_UNSPECIFIED = "INTERPOLATION_POINT_TYPE_UNSPECIFIED"
    MIN = "MIN"
    MAX = "MAX"
    NUMBER = "NUMBER"
    PERCENT = "PERCENT"
    PERCENTILE = "PERCENTILE"


@dataclass_json
@dataclass
class InterpolationPoint:
    r"""InterpolationPoint
    A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
    """
    
    color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorStyle') }})
    type: Optional[InterpolationPointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
