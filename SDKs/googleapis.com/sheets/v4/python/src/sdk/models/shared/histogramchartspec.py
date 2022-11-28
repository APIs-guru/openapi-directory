from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""HistogramChartSpec
    A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.
    """
    
    bucket_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    legend_position: Optional[HistogramChartSpecLegendPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legendPosition') }})
    outlier_percentile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outlierPercentile') }})
    series: Optional[List[HistogramSeries]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    show_item_dividers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showItemDividers') }})
    
