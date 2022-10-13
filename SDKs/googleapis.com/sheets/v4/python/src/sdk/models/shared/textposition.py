from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TextPositionHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGN_UNSPECIFIED = "HORIZONTAL_ALIGN_UNSPECIFIED"
    LEFT = "LEFT"
    CENTER = "CENTER"
    RIGHT = "RIGHT"


@dataclass_json
@dataclass
class TextPosition:
    horizontal_alignment: Optional[TextPositionHorizontalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontalAlignment' }})
    
