from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OsPolicyResourceGroup:
    r"""OsPolicyResourceGroup
    Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
    """
    
    inventory_filters: Optional[List[OsPolicyInventoryFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryFilters') }})
    os_filter: Optional[OsPolicyOsFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osFilter') }})
    resources: Optional[List[OsPolicyResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
