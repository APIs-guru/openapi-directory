from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BasicSeriesDataPointStyleOverride:
    r"""BasicSeriesDataPointStyleOverride
    Style override settings for a single series data point.
    """
    
    color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorStyle') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    point_style: Optional[PointStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointStyle') }})
    
