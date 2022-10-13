from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeseries


@dataclass_json
@dataclass
class CreateTimeSeriesRequest:
    time_series: Optional[List[timeseries.TimeSeries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeries' }})
    
