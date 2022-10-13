from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignedinventorysource


@dataclass_json
@dataclass
class BulkEditAssignedInventorySourcesResponse:
    assigned_inventory_sources: Optional[List[assignedinventorysource.AssignedInventorySource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedInventorySources' }})
    
