from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import paragraphborder
from . import paragraphborder
from . import paragraphborder
from . import paragraphborder
from . import paragraphborder
from . import dimension
from . import dimension
from . import dimension
from . import shading
from . import dimension
from . import dimension
from . import tabstop

class ParagraphStyleAlignmentEnum(str, Enum):
    ALIGNMENT_UNSPECIFIED = "ALIGNMENT_UNSPECIFIED"
    START = "START"
    CENTER = "CENTER"
    END = "END"
    JUSTIFIED = "JUSTIFIED"

class ParagraphStyleDirectionEnum(str, Enum):
    CONTENT_DIRECTION_UNSPECIFIED = "CONTENT_DIRECTION_UNSPECIFIED"
    LEFT_TO_RIGHT = "LEFT_TO_RIGHT"
    RIGHT_TO_LEFT = "RIGHT_TO_LEFT"

class ParagraphStyleNamedStyleTypeEnum(str, Enum):
    NAMED_STYLE_TYPE_UNSPECIFIED = "NAMED_STYLE_TYPE_UNSPECIFIED"
    NORMAL_TEXT = "NORMAL_TEXT"
    TITLE = "TITLE"
    SUBTITLE = "SUBTITLE"
    HEADING_1 = "HEADING_1"
    HEADING_2 = "HEADING_2"
    HEADING_3 = "HEADING_3"
    HEADING_4 = "HEADING_4"
    HEADING_5 = "HEADING_5"
    HEADING_6 = "HEADING_6"

class ParagraphStyleSpacingModeEnum(str, Enum):
    SPACING_MODE_UNSPECIFIED = "SPACING_MODE_UNSPECIFIED"
    NEVER_COLLAPSE = "NEVER_COLLAPSE"
    COLLAPSE_LISTS = "COLLAPSE_LISTS"


@dataclass_json
@dataclass
class ParagraphStyle:
    alignment: Optional[ParagraphStyleAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alignment' }})
    avoid_widow_and_orphan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avoidWidowAndOrphan' }})
    border_between: Optional[paragraphborder.ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderBetween' }})
    border_bottom: Optional[paragraphborder.ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderBottom' }})
    border_left: Optional[paragraphborder.ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderLeft' }})
    border_right: Optional[paragraphborder.ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderRight' }})
    border_top: Optional[paragraphborder.ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderTop' }})
    direction: Optional[ParagraphStyleDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    heading_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headingId' }})
    indent_end: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentEnd' }})
    indent_first_line: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentFirstLine' }})
    indent_start: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentStart' }})
    keep_lines_together: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepLinesTogether' }})
    keep_with_next: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepWithNext' }})
    line_spacing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineSpacing' }})
    named_style_type: Optional[ParagraphStyleNamedStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedStyleType' }})
    page_break_before: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageBreakBefore' }})
    shading: Optional[shading.Shading] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shading' }})
    space_above: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceAbove' }})
    space_below: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceBelow' }})
    spacing_mode: Optional[ParagraphStyleSpacingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spacingMode' }})
    tab_stops: Optional[List[tabstop.TabStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tabStops' }})
    
