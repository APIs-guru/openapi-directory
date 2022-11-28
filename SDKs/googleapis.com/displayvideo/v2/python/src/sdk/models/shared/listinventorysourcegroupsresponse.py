from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInventorySourceGroupsResponse:
    r"""ListInventorySourceGroupsResponse
    Response message for InventorySourceGroupService.ListInventorySourceGroups.
    """
    
    inventory_source_groups: Optional[List[InventorySourceGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceGroups') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
