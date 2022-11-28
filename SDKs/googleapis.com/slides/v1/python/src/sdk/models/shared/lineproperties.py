from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LinePropertiesDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"
    DASH_DOT = "DASH_DOT"
    LONG_DASH = "LONG_DASH"
    LONG_DASH_DOT = "LONG_DASH_DOT"

class LinePropertiesEndArrowEnum(str, Enum):
    ARROW_STYLE_UNSPECIFIED = "ARROW_STYLE_UNSPECIFIED"
    NONE = "NONE"
    STEALTH_ARROW = "STEALTH_ARROW"
    FILL_ARROW = "FILL_ARROW"
    FILL_CIRCLE = "FILL_CIRCLE"
    FILL_SQUARE = "FILL_SQUARE"
    FILL_DIAMOND = "FILL_DIAMOND"
    OPEN_ARROW = "OPEN_ARROW"
    OPEN_CIRCLE = "OPEN_CIRCLE"
    OPEN_SQUARE = "OPEN_SQUARE"
    OPEN_DIAMOND = "OPEN_DIAMOND"

class LinePropertiesStartArrowEnum(str, Enum):
    ARROW_STYLE_UNSPECIFIED = "ARROW_STYLE_UNSPECIFIED"
    NONE = "NONE"
    STEALTH_ARROW = "STEALTH_ARROW"
    FILL_ARROW = "FILL_ARROW"
    FILL_CIRCLE = "FILL_CIRCLE"
    FILL_SQUARE = "FILL_SQUARE"
    FILL_DIAMOND = "FILL_DIAMOND"
    OPEN_ARROW = "OPEN_ARROW"
    OPEN_CIRCLE = "OPEN_CIRCLE"
    OPEN_SQUARE = "OPEN_SQUARE"
    OPEN_DIAMOND = "OPEN_DIAMOND"


@dataclass_json
@dataclass
class LineProperties:
    r"""LineProperties
    The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.
    """
    
    dash_style: Optional[LinePropertiesDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashStyle') }})
    end_arrow: Optional[LinePropertiesEndArrowEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endArrow') }})
    end_connection: Optional[LineConnection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endConnection') }})
    line_fill: Optional[LineFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineFill') }})
    link: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    start_arrow: Optional[LinePropertiesStartArrowEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startArrow') }})
    start_connection: Optional[LineConnection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startConnection') }})
    weight: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
