from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HistogramSeries:
    r"""HistogramSeries
    A histogram series containing the series color and data.
    """
    
    bar_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barColor') }})
    bar_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barColorStyle') }})
    data: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
