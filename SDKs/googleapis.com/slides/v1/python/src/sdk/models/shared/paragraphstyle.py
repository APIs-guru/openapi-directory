from dataclasses import dataclass, field
from typing import Optional
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
    r"""ParagraphStyle
    Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.
    """
    
    alignment: Optional[ParagraphStyleAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alignment') }})
    direction: Optional[ParagraphStyleDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    indent_end: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentEnd') }})
    indent_first_line: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentFirstLine') }})
    indent_start: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentStart') }})
    line_spacing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineSpacing') }})
    space_above: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceAbove') }})
    space_below: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceBelow') }})
    spacing_mode: Optional[ParagraphStyleSpacingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spacingMode') }})
    
