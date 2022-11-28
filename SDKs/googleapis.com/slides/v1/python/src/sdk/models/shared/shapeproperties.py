from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ShapePropertiesContentAlignmentEnum(str, Enum):
    CONTENT_ALIGNMENT_UNSPECIFIED = "CONTENT_ALIGNMENT_UNSPECIFIED"
    CONTENT_ALIGNMENT_UNSUPPORTED = "CONTENT_ALIGNMENT_UNSUPPORTED"
    TOP = "TOP"
    MIDDLE = "MIDDLE"
    BOTTOM = "BOTTOM"


@dataclass_json
@dataclass
class ShapeProperties:
    r"""ShapeProperties
    The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.
    """
    
    autofit: Optional[Autofit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autofit') }})
    content_alignment: Optional[ShapePropertiesContentAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAlignment') }})
    link: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    outline: Optional[Outline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outline') }})
    shadow: Optional[Shadow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shadow') }})
    shape_background_fill: Optional[ShapeBackgroundFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeBackgroundFill') }})
    
