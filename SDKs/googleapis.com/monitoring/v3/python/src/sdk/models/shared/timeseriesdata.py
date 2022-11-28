from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeSeriesData:
    r"""TimeSeriesData
    Represents the values of a time series associated with a TimeSeriesDescriptor.
    """
    
    label_values: Optional[List[LabelValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelValues') }})
    point_data: Optional[List[PointData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointData') }})
    
