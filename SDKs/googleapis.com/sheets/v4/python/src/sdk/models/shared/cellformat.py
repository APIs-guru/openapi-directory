from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CellFormatHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGN_UNSPECIFIED = "HORIZONTAL_ALIGN_UNSPECIFIED"
    LEFT = "LEFT"
    CENTER = "CENTER"
    RIGHT = "RIGHT"

class CellFormatHyperlinkDisplayTypeEnum(str, Enum):
    HYPERLINK_DISPLAY_TYPE_UNSPECIFIED = "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED"
    LINKED = "LINKED"
    PLAIN_TEXT = "PLAIN_TEXT"

class CellFormatTextDirectionEnum(str, Enum):
    TEXT_DIRECTION_UNSPECIFIED = "TEXT_DIRECTION_UNSPECIFIED"
    LEFT_TO_RIGHT = "LEFT_TO_RIGHT"
    RIGHT_TO_LEFT = "RIGHT_TO_LEFT"

class CellFormatVerticalAlignmentEnum(str, Enum):
    VERTICAL_ALIGN_UNSPECIFIED = "VERTICAL_ALIGN_UNSPECIFIED"
    TOP = "TOP"
    MIDDLE = "MIDDLE"
    BOTTOM = "BOTTOM"

class CellFormatWrapStrategyEnum(str, Enum):
    WRAP_STRATEGY_UNSPECIFIED = "WRAP_STRATEGY_UNSPECIFIED"
    OVERFLOW_CELL = "OVERFLOW_CELL"
    LEGACY_WRAP = "LEGACY_WRAP"
    CLIP = "CLIP"
    WRAP = "WRAP"


@dataclass_json
@dataclass
class CellFormat:
    r"""CellFormat
    The format of a cell.
    """
    
    background_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    background_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorStyle') }})
    borders: Optional[Borders] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borders') }})
    horizontal_alignment: Optional[CellFormatHorizontalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalAlignment') }})
    hyperlink_display_type: Optional[CellFormatHyperlinkDisplayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperlinkDisplayType') }})
    number_format: Optional[NumberFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberFormat') }})
    padding: Optional[Padding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padding') }})
    text_direction: Optional[CellFormatTextDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDirection') }})
    text_format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    text_rotation: Optional[TextRotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textRotation') }})
    vertical_alignment: Optional[CellFormatVerticalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verticalAlignment') }})
    wrap_strategy: Optional[CellFormatWrapStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wrapStrategy') }})
    
