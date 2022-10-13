from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyinventoryfilter
from . import ospolicyosfilter
from . import ospolicyresource


@dataclass_json
@dataclass
class OsPolicyResourceGroup:
    inventory_filters: Optional[List[ospolicyinventoryfilter.OsPolicyInventoryFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryFilters' }})
    os_filter: Optional[ospolicyosfilter.OsPolicyOsFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osFilter' }})
    resources: Optional[List[ospolicyresource.OsPolicyResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
