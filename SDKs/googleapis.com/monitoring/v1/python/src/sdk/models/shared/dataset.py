from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DataSetPlotTypeEnum(str, Enum):
    PLOT_TYPE_UNSPECIFIED = "PLOT_TYPE_UNSPECIFIED"
    LINE = "LINE"
    STACKED_AREA = "STACKED_AREA"
    STACKED_BAR = "STACKED_BAR"
    HEATMAP = "HEATMAP"

class DataSetTargetAxisEnum(str, Enum):
    TARGET_AXIS_UNSPECIFIED = "TARGET_AXIS_UNSPECIFIED"
    Y1 = "Y1"
    Y2 = "Y2"


@dataclass_json
@dataclass
class DataSet:
    r"""DataSet
    Groups a time series query definition with charting options.
    """
    
    legend_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legendTemplate') }})
    min_alignment_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAlignmentPeriod') }})
    plot_type: Optional[DataSetPlotTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plotType') }})
    target_axis: Optional[DataSetTargetAxisEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAxis') }})
    time_series_query: Optional[TimeSeriesQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesQuery') }})
    
