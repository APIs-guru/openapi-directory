from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import chartoptions
from . import dataset
from . import threshold
from . import axis
from . import axis
from . import axis


@dataclass_json
@dataclass
class XyChart:
    chart_options: Optional[chartoptions.ChartOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartOptions' }})
    data_sets: Optional[List[dataset.DataSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSets' }})
    thresholds: Optional[List[threshold.Threshold]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholds' }})
    timeshift_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeshiftDuration' }})
    x_axis: Optional[axis.Axis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xAxis' }})
    y2_axis: Optional[axis.Axis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'y2Axis' }})
    y_axis: Optional[axis.Axis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yAxis' }})
    
