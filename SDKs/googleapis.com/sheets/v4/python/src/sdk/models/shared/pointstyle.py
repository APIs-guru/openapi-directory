from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PointStyleShapeEnum(str, Enum):
    POINT_SHAPE_UNSPECIFIED = "POINT_SHAPE_UNSPECIFIED"
    CIRCLE = "CIRCLE"
    DIAMOND = "DIAMOND"
    HEXAGON = "HEXAGON"
    PENTAGON = "PENTAGON"
    SQUARE = "SQUARE"
    STAR = "STAR"
    TRIANGLE = "TRIANGLE"
    X_MARK = "X_MARK"


@dataclass_json
@dataclass
class PointStyle:
    r"""PointStyle
    The style of a point on the chart.
    """
    
    shape: Optional[PointStyleShapeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shape') }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
