from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date


@dataclass_json
@dataclass
class SearchApplicationSessionStats:
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    search_sessions_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchSessionsCount' }})
    
