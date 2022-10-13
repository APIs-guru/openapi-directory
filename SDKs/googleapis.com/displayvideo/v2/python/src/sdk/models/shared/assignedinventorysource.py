from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssignedInventorySource:
    assigned_inventory_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedInventorySourceId' }})
    inventory_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySourceId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
