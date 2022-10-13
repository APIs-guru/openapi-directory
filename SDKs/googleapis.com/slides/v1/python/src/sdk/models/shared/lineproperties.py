from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lineconnection
from . import linefill
from . import link
from . import lineconnection
from . import dimension

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
    dash_style: Optional[LinePropertiesDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashStyle' }})
    end_arrow: Optional[LinePropertiesEndArrowEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endArrow' }})
    end_connection: Optional[lineconnection.LineConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endConnection' }})
    line_fill: Optional[linefill.LineFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineFill' }})
    link: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    start_arrow: Optional[LinePropertiesStartArrowEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startArrow' }})
    start_connection: Optional[lineconnection.LineConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startConnection' }})
    weight: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
