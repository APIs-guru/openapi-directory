from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PieChartSpecLegendPositionEnum(str, Enum):
    PIE_CHART_LEGEND_POSITION_UNSPECIFIED = "PIE_CHART_LEGEND_POSITION_UNSPECIFIED"
    BOTTOM_LEGEND = "BOTTOM_LEGEND"
    LEFT_LEGEND = "LEFT_LEGEND"
    RIGHT_LEGEND = "RIGHT_LEGEND"
    TOP_LEGEND = "TOP_LEGEND"
    NO_LEGEND = "NO_LEGEND"
    LABELED_LEGEND = "LABELED_LEGEND"


@dataclass_json
@dataclass
class PieChartSpec:
    r"""PieChartSpec
    A pie chart.
    """
    
    domain: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    legend_position: Optional[PieChartSpecLegendPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legendPosition') }})
    pie_hole: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pieHole') }})
    series: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    three_dimensional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threeDimensional') }})
    
