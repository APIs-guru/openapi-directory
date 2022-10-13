from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchapplicationquerystats


@dataclass_json
@dataclass
class GetSearchApplicationQueryStatsResponse:
    stats: Optional[List[searchapplicationquerystats.SearchApplicationQueryStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    total_query_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalQueryCount' }})
    
