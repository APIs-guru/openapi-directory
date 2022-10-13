from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import dimension
from . import dimension
from . import dimension
from . import dimension

class ParagraphStyleAlignmentEnum(str, Enum):
    ALIGNMENT_UNSPECIFIED = "ALIGNMENT_UNSPECIFIED"
    START = "START"
    CENTER = "CENTER"
    END = "END"
    JUSTIFIED = "JUSTIFIED"

class ParagraphStyleDirectionEnum(str, Enum):
    TEXT_DIRECTION_UNSPECIFIED = "TEXT_DIRECTION_UNSPECIFIED"
    LEFT_TO_RIGHT = "LEFT_TO_RIGHT"
    RIGHT_TO_LEFT = "RIGHT_TO_LEFT"

class ParagraphStyleSpacingModeEnum(str, Enum):
    SPACING_MODE_UNSPECIFIED = "SPACING_MODE_UNSPECIFIED"
    NEVER_COLLAPSE = "NEVER_COLLAPSE"
    COLLAPSE_LISTS = "COLLAPSE_LISTS"


@dataclass_json
@dataclass
class ParagraphStyle:
    alignment: Optional[ParagraphStyleAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alignment' }})
    direction: Optional[ParagraphStyleDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    indent_end: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentEnd' }})
    indent_first_line: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentFirstLine' }})
    indent_start: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentStart' }})
    line_spacing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineSpacing' }})
    space_above: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceAbove' }})
    space_below: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceBelow' }})
    spacing_mode: Optional[ParagraphStyleSpacingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spacingMode' }})
    
