from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    shape: Optional[PointStyleShapeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shape' }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
