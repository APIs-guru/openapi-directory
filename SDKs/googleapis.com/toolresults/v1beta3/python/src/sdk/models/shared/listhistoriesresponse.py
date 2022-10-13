from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import history


@dataclass_json
@dataclass
class ListHistoriesResponse:
    histories: Optional[List[history.History]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histories' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
