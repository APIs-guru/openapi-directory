from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTrafficStatsResponse:
    r"""ListTrafficStatsResponse
    Response message for ListTrafficStats.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    traffic_stats: Optional[List[TrafficStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficStats') }})
    
