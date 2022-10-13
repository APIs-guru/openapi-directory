from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timeseriesquery

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
    legend_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legendTemplate' }})
    min_alignment_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minAlignmentPeriod' }})
    plot_type: Optional[DataSetPlotTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plotType' }})
    target_axis: Optional[DataSetTargetAxisEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetAxis' }})
    time_series_query: Optional[timeseriesquery.TimeSeriesQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesQuery' }})
    
