from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import color
from . import colorstyle
from . import color
from . import colorstyle
from . import color
from . import colorstyle


@dataclass_json
@dataclass
class BandingProperties:
    first_band_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstBandColor' }})
    first_band_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstBandColorStyle' }})
    footer_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footerColor' }})
    footer_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footerColorStyle' }})
    header_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerColor' }})
    header_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerColorStyle' }})
    second_band_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondBandColor' }})
    second_band_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondBandColorStyle' }})
    
