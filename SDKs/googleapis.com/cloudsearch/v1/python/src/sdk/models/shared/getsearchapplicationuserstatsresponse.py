from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchapplicationuserstats


@dataclass_json
@dataclass
class GetSearchApplicationUserStatsResponse:
    stats: Optional[List[searchapplicationuserstats.SearchApplicationUserStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
