from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import chartdata
from . import treemapchartcolorscale
from . import color
from . import colorstyle
from . import chartdata
from . import chartdata
from . import chartdata
from . import textformat


@dataclass_json
@dataclass
class TreemapChartSpec:
    color_data: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorData' }})
    color_scale: Optional[treemapchartcolorscale.TreemapChartColorScale] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorScale' }})
    header_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerColor' }})
    header_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerColorStyle' }})
    hide_tooltips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideTooltips' }})
    hinted_levels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hintedLevels' }})
    labels: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    levels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'levels' }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    parent_labels: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentLabels' }})
    size_data: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeData' }})
    text_format: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textFormat' }})
    
