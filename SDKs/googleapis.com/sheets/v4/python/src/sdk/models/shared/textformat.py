from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextFormat:
    r"""TextFormat
    The format of a run of text in a cell. Absent values indicate that the field isn't specified.
    """
    
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bold') }})
    font_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontFamily') }})
    font_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontSize') }})
    foreground_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColor') }})
    foreground_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColorStyle') }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('italic') }})
    link: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strikethrough') }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underline') }})
    
