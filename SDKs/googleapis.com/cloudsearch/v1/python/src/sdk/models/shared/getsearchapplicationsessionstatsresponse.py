from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchapplicationsessionstats


@dataclass_json
@dataclass
class GetSearchApplicationSessionStatsResponse:
    stats: Optional[List[searchapplicationsessionstats.SearchApplicationSessionStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
