from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class PageviewsCountsTimeRangeEnum(str, Enum):
    ALL_TIME = "ALL_TIME"
    THIRTY_DAYS = "THIRTY_DAYS"
    SEVEN_DAYS = "SEVEN_DAYS"


@dataclass_json
@dataclass
class PageviewsCounts:
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    time_range: Optional[PageviewsCountsTimeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    

@dataclass_json
@dataclass
class Pageviews:
    blog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blogId' }})
    counts: Optional[List[PageviewsCounts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counts' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
