from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkEditAssignedInventorySourcesRequestInput:
    r"""BulkEditAssignedInventorySourcesRequestInput
    Request message for AssignedInventorySourceService.BulkEdit.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    created_assigned_inventory_sources: Optional[List[AssignedInventorySourceInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAssignedInventorySources') }})
    deleted_assigned_inventory_sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedAssignedInventorySources') }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    
