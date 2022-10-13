from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import waiter


@dataclass_json
@dataclass
class ListWaitersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    waiters: Optional[List[waiter.Waiter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waiters' }})
    
