from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errorevent


@dataclass_json
@dataclass
class ListEventsResponse:
    error_events: Optional[List[errorevent.ErrorEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorEvents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    time_range_begin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRangeBegin' }})
    
