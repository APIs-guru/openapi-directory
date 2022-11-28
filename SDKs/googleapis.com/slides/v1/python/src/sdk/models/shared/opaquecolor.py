from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OpaqueColorThemeColorEnum(str, Enum):
    THEME_COLOR_TYPE_UNSPECIFIED = "THEME_COLOR_TYPE_UNSPECIFIED"
    DARK1 = "DARK1"
    LIGHT1 = "LIGHT1"
    DARK2 = "DARK2"
    LIGHT2 = "LIGHT2"
    ACCENT1 = "ACCENT1"
    ACCENT2 = "ACCENT2"
    ACCENT3 = "ACCENT3"
    ACCENT4 = "ACCENT4"
    ACCENT5 = "ACCENT5"
    ACCENT6 = "ACCENT6"
    HYPERLINK = "HYPERLINK"
    FOLLOWED_HYPERLINK = "FOLLOWED_HYPERLINK"
    TEXT1 = "TEXT1"
    BACKGROUND1 = "BACKGROUND1"
    TEXT2 = "TEXT2"
    BACKGROUND2 = "BACKGROUND2"


@dataclass_json
@dataclass
class OpaqueColor:
    r"""OpaqueColor
    A themeable solid color value.
    """
    
    rgb_color: Optional[RgbColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rgbColor') }})
    theme_color: Optional[OpaqueColorThemeColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themeColor') }})
    
