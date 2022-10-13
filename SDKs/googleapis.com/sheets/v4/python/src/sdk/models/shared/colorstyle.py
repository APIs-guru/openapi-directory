from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import color

class ColorStyleThemeColorEnum(str, Enum):
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
class ColorStyle:
    rgb_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rgbColor' }})
    theme_color: Optional[ColorStyleThemeColorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'themeColor' }})
    
