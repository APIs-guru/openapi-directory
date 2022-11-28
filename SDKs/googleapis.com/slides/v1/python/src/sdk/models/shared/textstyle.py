from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TextStyleBaselineOffsetEnum(str, Enum):
    BASELINE_OFFSET_UNSPECIFIED = "BASELINE_OFFSET_UNSPECIFIED"
    NONE = "NONE"
    SUPERSCRIPT = "SUPERSCRIPT"
    SUBSCRIPT = "SUBSCRIPT"


@dataclass_json
@dataclass
class TextStyle:
    r"""TextStyle
    Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
    """
    
    background_color: Optional[OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    baseline_offset: Optional[TextStyleBaselineOffsetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselineOffset') }})
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bold') }})
    font_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontFamily') }})
    font_size: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontSize') }})
    foreground_color: Optional[OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColor') }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('italic') }})
    link: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    small_caps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smallCaps') }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strikethrough') }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underline') }})
    weighted_font_family: Optional[WeightedFontFamily] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightedFontFamily') }})
    
