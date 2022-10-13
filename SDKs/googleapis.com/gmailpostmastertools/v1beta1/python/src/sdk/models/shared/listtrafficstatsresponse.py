from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trafficstats


@dataclass_json
@dataclass
class ListTrafficStatsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    traffic_stats: Optional[List[trafficstats.TrafficStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficStats' }})
    
