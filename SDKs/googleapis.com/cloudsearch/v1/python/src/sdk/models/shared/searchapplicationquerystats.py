from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import date
from . import querycountbystatus


@dataclass_json
@dataclass
class SearchApplicationQueryStats:
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    query_count_by_status: Optional[List[querycountbystatus.QueryCountByStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryCountByStatus' }})
    
