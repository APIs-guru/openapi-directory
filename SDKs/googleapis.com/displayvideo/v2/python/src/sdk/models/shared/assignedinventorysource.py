from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssignedInventorySource:
    r"""AssignedInventorySource
    An assignment between a targetable inventory source and an inventory source group.
    """
    
    assigned_inventory_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedInventorySourceId') }})
    inventory_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class AssignedInventorySourceInput:
    r"""AssignedInventorySourceInput
    An assignment between a targetable inventory source and an inventory source group.
    """
    
    inventory_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceId') }})
    
