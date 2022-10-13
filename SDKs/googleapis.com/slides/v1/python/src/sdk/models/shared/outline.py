from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import outlinefill
from . import dimension

class OutlineDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"
    DASH_DOT = "DASH_DOT"
    LONG_DASH = "LONG_DASH"
    LONG_DASH_DOT = "LONG_DASH_DOT"

class OutlinePropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"
    INHERIT = "INHERIT"


@dataclass_json
@dataclass
class Outline:
    dash_style: Optional[OutlineDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashStyle' }})
    outline_fill: Optional[outlinefill.OutlineFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlineFill' }})
    property_state: Optional[OutlinePropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyState' }})
    weight: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
