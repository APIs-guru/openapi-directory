from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import histogramseries

class HistogramChartSpecLegendPositionEnum(str, Enum):
    HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED = "HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED"
    BOTTOM_LEGEND = "BOTTOM_LEGEND"
    LEFT_LEGEND = "LEFT_LEGEND"
    RIGHT_LEGEND = "RIGHT_LEGEND"
    TOP_LEGEND = "TOP_LEGEND"
    NO_LEGEND = "NO_LEGEND"
    INSIDE_LEGEND = "INSIDE_LEGEND"


@dataclass_json
@dataclass
class HistogramChartSpec:
    bucket_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketSize' }})
    legend_position: Optional[HistogramChartSpecLegendPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legendPosition' }})
    outlier_percentile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlierPercentile' }})
    series: Optional[List[histogramseries.HistogramSeries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'series' }})
    show_item_dividers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showItemDividers' }})
    
