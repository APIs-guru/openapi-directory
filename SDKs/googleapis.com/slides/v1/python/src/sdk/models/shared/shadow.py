from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Shadow
    The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
    """
    
    alignment: Optional[ShadowAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alignment') }})
    alpha: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha') }})
    blur_radius: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blurRadius') }})
    color: Optional[OpaqueColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    property_state: Optional[ShadowPropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyState') }})
    rotate_with_shape: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotateWithShape') }})
    transform: Optional[AffineTransform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transform') }})
    type: Optional[ShadowTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
