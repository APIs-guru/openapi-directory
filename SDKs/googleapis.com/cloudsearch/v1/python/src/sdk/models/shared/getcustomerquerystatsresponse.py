from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customerquerystats


@dataclass_json
@dataclass
class GetCustomerQueryStatsResponse:
    stats: Optional[List[customerquerystats.CustomerQueryStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    total_query_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalQueryCount' }})
    
