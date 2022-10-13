from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import link


@dataclass_json
@dataclass
class TextFormat:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    font_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontFamily' }})
    font_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontSize' }})
    foreground_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foregroundColor' }})
    foreground_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foregroundColorStyle' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    link: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    
