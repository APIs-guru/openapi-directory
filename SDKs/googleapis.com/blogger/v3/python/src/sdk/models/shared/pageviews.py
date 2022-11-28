from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PageviewsCountsTimeRangeEnum(str, Enum):
    ALL_TIME = "ALL_TIME"
    THIRTY_DAYS = "THIRTY_DAYS"
    SEVEN_DAYS = "SEVEN_DAYS"


@dataclass_json
@dataclass
class PageviewsCounts:
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    time_range: Optional[PageviewsCountsTimeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    

@dataclass_json
@dataclass
class Pageviews:
    blog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blogId') }})
    counts: Optional[List[PageviewsCounts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
