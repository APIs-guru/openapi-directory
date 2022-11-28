from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryTimeSeriesResponse:
    r"""QueryTimeSeriesResponse
    The QueryTimeSeries response.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    partial_errors: Optional[List[Status]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialErrors') }})
    time_series_data: Optional[List[TimeSeriesData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesData') }})
    time_series_descriptor: Optional[TimeSeriesDescriptor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesDescriptor') }})
    
