from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import labelvalue
from . import pointdata


@dataclass_json
@dataclass
class TimeSeriesData:
    label_values: Optional[List[labelvalue.LabelValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelValues' }})
    point_data: Optional[List[pointdata.PointData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointData' }})
    
