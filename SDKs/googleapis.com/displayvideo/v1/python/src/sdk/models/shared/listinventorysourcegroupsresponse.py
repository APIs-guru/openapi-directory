from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventorysourcegroup


@dataclass_json
@dataclass
class ListInventorySourceGroupsResponse:
    inventory_source_groups: Optional[List[inventorysourcegroup.InventorySourceGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySourceGroups' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
