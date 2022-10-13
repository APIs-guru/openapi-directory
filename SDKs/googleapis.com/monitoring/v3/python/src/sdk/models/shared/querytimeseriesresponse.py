from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import timeseriesdata
from . import timeseriesdescriptor


@dataclass_json
@dataclass
class QueryTimeSeriesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    partial_errors: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partialErrors' }})
    time_series_data: Optional[List[timeseriesdata.TimeSeriesData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesData' }})
    time_series_descriptor: Optional[timeseriesdescriptor.TimeSeriesDescriptor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesDescriptor' }})
    
