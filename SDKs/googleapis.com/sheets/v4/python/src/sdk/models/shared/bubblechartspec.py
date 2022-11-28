from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""BubbleChartSpec
    A bubble chart.
    """
    
    bubble_border_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleBorderColor') }})
    bubble_border_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleBorderColorStyle') }})
    bubble_labels: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleLabels') }})
    bubble_max_radius_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleMaxRadiusSize') }})
    bubble_min_radius_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleMinRadiusSize') }})
    bubble_opacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleOpacity') }})
    bubble_sizes: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleSizes') }})
    bubble_text_style: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleTextStyle') }})
    domain: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    group_ids: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupIds') }})
    legend_position: Optional[BubbleChartSpecLegendPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legendPosition') }})
    series: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    
