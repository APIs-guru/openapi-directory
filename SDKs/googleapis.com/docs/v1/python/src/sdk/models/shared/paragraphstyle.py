from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""ParagraphStyle
    Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
    """
    
    alignment: Optional[ParagraphStyleAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alignment') }})
    avoid_widow_and_orphan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidWidowAndOrphan') }})
    border_between: Optional[ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderBetween') }})
    border_bottom: Optional[ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderBottom') }})
    border_left: Optional[ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderLeft') }})
    border_right: Optional[ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderRight') }})
    border_top: Optional[ParagraphBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderTop') }})
    direction: Optional[ParagraphStyleDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    heading_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headingId') }})
    indent_end: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentEnd') }})
    indent_first_line: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentFirstLine') }})
    indent_start: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentStart') }})
    keep_lines_together: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepLinesTogether') }})
    keep_with_next: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepWithNext') }})
    line_spacing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineSpacing') }})
    named_style_type: Optional[ParagraphStyleNamedStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedStyleType') }})
    page_break_before: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageBreakBefore') }})
    shading: Optional[Shading] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shading') }})
    space_above: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceAbove') }})
    space_below: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceBelow') }})
    spacing_mode: Optional[ParagraphStyleSpacingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spacingMode') }})
    tab_stops: Optional[List[TabStop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tabStops') }})
    
