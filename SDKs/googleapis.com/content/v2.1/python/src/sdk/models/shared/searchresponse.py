from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportrow


@dataclass_json
@dataclass
class SearchResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    results: Optional[List[reportrow.ReportRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
