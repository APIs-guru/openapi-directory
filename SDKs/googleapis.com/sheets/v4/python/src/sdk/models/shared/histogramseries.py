from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import chartdata


@dataclass_json
@dataclass
class HistogramSeries:
    bar_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barColor' }})
    bar_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barColorStyle' }})
    data: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
