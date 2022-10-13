from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import optionalcolor
from . import dimension

class EmbeddedObjectBorderDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"

class EmbeddedObjectBorderPropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"


@dataclass_json
@dataclass
class EmbeddedObjectBorder:
    color: Optional[optionalcolor.OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    dash_style: Optional[EmbeddedObjectBorderDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashStyle' }})
    property_state: Optional[EmbeddedObjectBorderPropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyState' }})
    width: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
