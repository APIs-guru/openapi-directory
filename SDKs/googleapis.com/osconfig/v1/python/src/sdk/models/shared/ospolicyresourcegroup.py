from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyinventoryfilter
from . import ospolicyresource


@dataclass_json
@dataclass
class OsPolicyResourceGroup:
    inventory_filters: Optional[List[ospolicyinventoryfilter.OsPolicyInventoryFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryFilters' }})
    resources: Optional[List[ospolicyresource.OsPolicyResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
