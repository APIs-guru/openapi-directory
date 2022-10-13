from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import history


@dataclass_json
@dataclass
class ListHistoryResponse:
    history: Optional[List[history.History]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'history' }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyId' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
