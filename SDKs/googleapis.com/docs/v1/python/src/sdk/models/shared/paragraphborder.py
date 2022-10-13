from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import optionalcolor
from . import dimension
from . import dimension

class ParagraphBorderDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"


@dataclass_json
@dataclass
class ParagraphBorder:
    color: Optional[optionalcolor.OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    dash_style: Optional[ParagraphBorderDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashStyle' }})
    padding: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'padding' }})
    width: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
