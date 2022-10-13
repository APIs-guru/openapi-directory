from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchapplication


@dataclass_json
@dataclass
class ListSearchApplicationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    search_applications: Optional[List[searchapplication.SearchApplication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchApplications' }})
    
