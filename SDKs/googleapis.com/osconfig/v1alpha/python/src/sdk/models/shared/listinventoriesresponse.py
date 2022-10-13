from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventory


@dataclass_json
@dataclass
class ListInventoriesResponse:
    inventories: Optional[List[inventory.Inventory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventories' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
