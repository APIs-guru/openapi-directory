from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTimeSeriesResponse:
    r"""ListTimeSeriesResponse
    The ListTimeSeries response.
    """
    
    execution_errors: Optional[List[Status]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionErrors') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    time_series: Optional[List[TimeSeries]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeries') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
