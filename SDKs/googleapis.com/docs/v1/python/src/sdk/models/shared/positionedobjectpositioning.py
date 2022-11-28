from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""PositionedObjectPositioning
    The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it's tethered to.
    """
    
    layout: Optional[PositionedObjectPositioningLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    left_offset: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leftOffset') }})
    top_offset: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topOffset') }})
    
