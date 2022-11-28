from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TimeSeriesTableMetricVisualizationEnum(str, Enum):
    METRIC_VISUALIZATION_UNSPECIFIED = "METRIC_VISUALIZATION_UNSPECIFIED"
    NUMBER = "NUMBER"
    BAR = "BAR"


@dataclass_json
@dataclass
class TimeSeriesTable:
    r"""TimeSeriesTable
    A table that displays time series data.
    """
    
    column_settings: Optional[List[ColumnSettings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSettings') }})
    data_sets: Optional[List[TableDataSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSets') }})
    metric_visualization: Optional[TimeSeriesTableMetricVisualizationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricVisualization') }})
    
