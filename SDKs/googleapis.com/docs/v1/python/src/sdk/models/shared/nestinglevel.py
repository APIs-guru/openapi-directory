from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NestingLevelBulletAlignmentEnum(str, Enum):
    BULLET_ALIGNMENT_UNSPECIFIED = "BULLET_ALIGNMENT_UNSPECIFIED"
    START = "START"
    CENTER = "CENTER"
    END = "END"

class NestingLevelGlyphTypeEnum(str, Enum):
    GLYPH_TYPE_UNSPECIFIED = "GLYPH_TYPE_UNSPECIFIED"
    NONE = "NONE"
    DECIMAL = "DECIMAL"
    ZERO_DECIMAL = "ZERO_DECIMAL"
    UPPER_ALPHA = "UPPER_ALPHA"
    ALPHA = "ALPHA"
    UPPER_ROMAN = "UPPER_ROMAN"
    ROMAN = "ROMAN"


@dataclass_json
@dataclass
class NestingLevel:
    r"""NestingLevel
    Contains properties describing the look and feel of a list bullet at a given level of nesting.
    """
    
    bullet_alignment: Optional[NestingLevelBulletAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulletAlignment') }})
    glyph_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glyphFormat') }})
    glyph_symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glyphSymbol') }})
    glyph_type: Optional[NestingLevelGlyphTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glyphType') }})
    indent_first_line: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentFirstLine') }})
    indent_start: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentStart') }})
    start_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startNumber') }})
    text_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    
