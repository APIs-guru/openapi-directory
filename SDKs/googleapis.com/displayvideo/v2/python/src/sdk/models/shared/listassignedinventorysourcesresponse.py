from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAssignedInventorySourcesResponse:
    r"""ListAssignedInventorySourcesResponse
    Response message for AssignedInventorySourceService.ListAssignedInventorySources.
    """
    
    assigned_inventory_sources: Optional[List[AssignedInventorySource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedInventorySources') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
