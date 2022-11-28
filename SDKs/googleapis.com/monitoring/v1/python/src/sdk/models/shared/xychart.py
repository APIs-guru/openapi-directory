from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class XyChart:
    r"""XyChart
    A chart that displays data on a 2D (X and Y axes) plane.
    """
    
    chart_options: Optional[ChartOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartOptions') }})
    data_sets: Optional[List[DataSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSets') }})
    thresholds: Optional[List[Threshold]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholds') }})
    timeshift_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeshiftDuration') }})
    x_axis: Optional[Axis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xAxis') }})
    y2_axis: Optional[Axis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y2Axis') }})
    y_axis: Optional[Axis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yAxis') }})
    
