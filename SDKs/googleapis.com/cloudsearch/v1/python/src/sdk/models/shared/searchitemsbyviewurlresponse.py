from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import item


@dataclass_json
@dataclass
class SearchItemsByViewURLResponse:
    items: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
