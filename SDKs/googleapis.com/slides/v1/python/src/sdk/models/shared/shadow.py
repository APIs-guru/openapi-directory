from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import opaquecolor
from . import affinetransform

class ShadowAlignmentEnum(str, Enum):
    RECTANGLE_POSITION_UNSPECIFIED = "RECTANGLE_POSITION_UNSPECIFIED"
    TOP_LEFT = "TOP_LEFT"
    TOP_CENTER = "TOP_CENTER"
    TOP_RIGHT = "TOP_RIGHT"
    LEFT_CENTER = "LEFT_CENTER"
    CENTER = "CENTER"
    RIGHT_CENTER = "RIGHT_CENTER"
    BOTTOM_LEFT = "BOTTOM_LEFT"
    BOTTOM_CENTER = "BOTTOM_CENTER"
    BOTTOM_RIGHT = "BOTTOM_RIGHT"

class ShadowPropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"
    INHERIT = "INHERIT"

class ShadowTypeEnum(str, Enum):
    SHADOW_TYPE_UNSPECIFIED = "SHADOW_TYPE_UNSPECIFIED"
    OUTER = "OUTER"


@dataclass_json
@dataclass
class Shadow:
    alignment: Optional[ShadowAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alignment' }})
    alpha: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alpha' }})
    blur_radius: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blurRadius' }})
    color: Optional[opaquecolor.OpaqueColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    property_state: Optional[ShadowPropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyState' }})
    rotate_with_shape: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotateWithShape' }})
    transform: Optional[affinetransform.AffineTransform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transform' }})
    type: Optional[ShadowTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
