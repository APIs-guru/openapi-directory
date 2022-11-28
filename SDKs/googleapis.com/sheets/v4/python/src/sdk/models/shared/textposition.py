from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TextPositionHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGN_UNSPECIFIED = "HORIZONTAL_ALIGN_UNSPECIFIED"
    LEFT = "LEFT"
    CENTER = "CENTER"
    RIGHT = "RIGHT"


@dataclass_json
@dataclass
class TextPosition:
    r"""TextPosition
    Position settings for text.
    """
    
    horizontal_alignment: Optional[TextPositionHorizontalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalAlignment') }})
    
