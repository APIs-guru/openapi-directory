from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventorysource


@dataclass_json
@dataclass
class ListInventorySourcesResponse:
    inventory_sources: Optional[List[inventorysource.InventorySource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySources' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
