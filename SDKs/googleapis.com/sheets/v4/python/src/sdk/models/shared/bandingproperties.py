from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BandingProperties:
    r"""BandingProperties
    Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.
    """
    
    first_band_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstBandColor') }})
    first_band_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstBandColorStyle') }})
    footer_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerColor') }})
    footer_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerColorStyle') }})
    header_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerColor') }})
    header_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerColorStyle') }})
    second_band_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondBandColor') }})
    second_band_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondBandColorStyle') }})
    
