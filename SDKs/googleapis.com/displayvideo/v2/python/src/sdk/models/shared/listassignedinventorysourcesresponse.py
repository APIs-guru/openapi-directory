from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignedinventorysource


@dataclass_json
@dataclass
class ListAssignedInventorySourcesResponse:
    assigned_inventory_sources: Optional[List[assignedinventorysource.AssignedInventorySource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedInventorySources' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
