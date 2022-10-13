from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import episodesearchresult
from . import podcastsearchresult
from . import curatedlistsearchresult


@dataclass_json
@dataclass
class SearchResponse:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_offset' }})
    results: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    took: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'took' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
