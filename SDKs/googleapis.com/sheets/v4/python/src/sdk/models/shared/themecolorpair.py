from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ThemeColorPairColorTypeEnum(str, Enum):
    THEME_COLOR_TYPE_UNSPECIFIED = "THEME_COLOR_TYPE_UNSPECIFIED"
    TEXT = "TEXT"
    BACKGROUND = "BACKGROUND"
    ACCENT1 = "ACCENT1"
    ACCENT2 = "ACCENT2"
    ACCENT3 = "ACCENT3"
    ACCENT4 = "ACCENT4"
    ACCENT5 = "ACCENT5"
    ACCENT6 = "ACCENT6"
    LINK = "LINK"


@dataclass_json
@dataclass
class ThemeColorPair:
    r"""ThemeColorPair
    A pair mapping a spreadsheet theme color type to the concrete color it represents.
    """
    
    color: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    color_type: Optional[ThemeColorPairColorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorType') }})
    
