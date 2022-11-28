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
    Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
    """
    
    background_color: Optional[OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    baseline_offset: Optional[TextStyleBaselineOffsetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselineOffset') }})
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bold') }})
    font_size: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontSize') }})
    foreground_color: Optional[OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColor') }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('italic') }})
    link: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    small_caps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smallCaps') }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strikethrough') }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underline') }})
    weighted_font_family: Optional[WeightedFontFamily] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightedFontFamily') }})
    
