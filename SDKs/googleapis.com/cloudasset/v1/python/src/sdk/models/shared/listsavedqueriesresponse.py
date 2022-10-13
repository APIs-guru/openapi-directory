from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import savedquery


@dataclass_json
@dataclass
class ListSavedQueriesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    saved_queries: Optional[List[savedquery.SavedQuery]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savedQueries' }})
    
