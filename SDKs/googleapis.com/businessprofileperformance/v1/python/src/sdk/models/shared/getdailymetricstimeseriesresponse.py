from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timeseries


@dataclass_json
@dataclass
class GetDailyMetricsTimeSeriesResponse:
    time_series: Optional[timeseries.TimeSeries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeries' }})
    
