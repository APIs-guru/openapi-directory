from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import timeseries


@dataclass_json
@dataclass
class ListTimeSeriesResponse:
    execution_errors: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionErrors' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    time_series: Optional[List[timeseries.TimeSeries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeries' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
