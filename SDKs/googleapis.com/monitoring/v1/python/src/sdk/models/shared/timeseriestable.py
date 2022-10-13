from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tabledataset

class TimeSeriesTableMetricVisualizationEnum(str, Enum):
    METRIC_VISUALIZATION_UNSPECIFIED = "METRIC_VISUALIZATION_UNSPECIFIED"
    NUMBER = "NUMBER"
    BAR = "BAR"


@dataclass_json
@dataclass
class TimeSeriesTable:
    data_sets: Optional[List[tabledataset.TableDataSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSets' }})
    metric_visualization: Optional[TimeSeriesTableMetricVisualizationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricVisualization' }})
    
