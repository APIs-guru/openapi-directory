from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEventsResponse:
    r"""ListEventsResponse
    Contains a set of requested error events.
    """
    
    error_events: Optional[List[ErrorEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorEvents') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    time_range_begin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRangeBegin') }})
    
