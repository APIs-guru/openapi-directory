from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignedinventorysource


@dataclass_json
@dataclass
class BulkEditAssignedInventorySourcesRequest:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    created_assigned_inventory_sources: Optional[List[assignedinventorysource.AssignedInventorySource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAssignedInventorySources' }})
    deleted_assigned_inventory_sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedAssignedInventorySources' }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerId' }})
    
