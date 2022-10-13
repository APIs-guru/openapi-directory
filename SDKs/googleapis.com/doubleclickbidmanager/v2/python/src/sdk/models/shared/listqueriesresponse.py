from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import query


@dataclass_json
@dataclass
class ListQueriesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    queries: Optional[List[query.Query]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queries' }})
    
