from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errorgroupstats


@dataclass_json
@dataclass
class ListGroupStatsResponse:
    error_group_stats: Optional[List[errorgroupstats.ErrorGroupStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorGroupStats' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    time_range_begin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRangeBegin' }})
    
