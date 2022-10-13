from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import dimension

class PositionedObjectPositioningLayoutEnum(str, Enum):
    POSITIONED_OBJECT_LAYOUT_UNSPECIFIED = "POSITIONED_OBJECT_LAYOUT_UNSPECIFIED"
    WRAP_TEXT = "WRAP_TEXT"
    BREAK_LEFT = "BREAK_LEFT"
    BREAK_RIGHT = "BREAK_RIGHT"
    BREAK_LEFT_RIGHT = "BREAK_LEFT_RIGHT"
    IN_FRONT_OF_TEXT = "IN_FRONT_OF_TEXT"
    BEHIND_TEXT = "BEHIND_TEXT"


@dataclass_json
@dataclass
class PositionedObjectPositioning:
    layout: Optional[PositionedObjectPositioningLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    left_offset: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leftOffset' }})
    top_offset: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topOffset' }})
    
