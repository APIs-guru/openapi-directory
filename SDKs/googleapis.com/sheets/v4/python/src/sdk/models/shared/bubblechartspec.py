from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import chartdata
from . import chartdata
from . import textformat
from . import chartdata
from . import chartdata
from . import chartdata

class BubbleChartSpecLegendPositionEnum(str, Enum):
    BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED = "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED"
    BOTTOM_LEGEND = "BOTTOM_LEGEND"
    LEFT_LEGEND = "LEFT_LEGEND"
    RIGHT_LEGEND = "RIGHT_LEGEND"
    TOP_LEGEND = "TOP_LEGEND"
    NO_LEGEND = "NO_LEGEND"
    INSIDE_LEGEND = "INSIDE_LEGEND"


@dataclass_json
@dataclass
class BubbleChartSpec:
    bubble_border_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bubbleBorderColor' }})
    bubble_border_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bubbleBorderColorStyle' }})
    bubble_labels: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bubbleLabels' }})
    bubble_max_radius_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bubbleMaxRadiusSize' }})
    bubble_min_radius_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bubbleMinRadiusSize' }})
    bubble_opacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bubbleOpacity' }})
    bubble_sizes: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bubbleSizes' }})
    bubble_text_style: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bubbleTextStyle' }})
    domain: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    group_ids: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupIds' }})
    legend_position: Optional[BubbleChartSpecLegendPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legendPosition' }})
    series: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'series' }})
    
