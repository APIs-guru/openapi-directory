from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle

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
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorStyle' }})
    type: Optional[InterpolationPointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
