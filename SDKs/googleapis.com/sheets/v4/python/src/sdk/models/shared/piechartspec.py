from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import chartdata
from . import chartdata

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
    domain: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    legend_position: Optional[PieChartSpecLegendPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legendPosition' }})
    pie_hole: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pieHole' }})
    series: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'series' }})
    three_dimensional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threeDimensional' }})
    
