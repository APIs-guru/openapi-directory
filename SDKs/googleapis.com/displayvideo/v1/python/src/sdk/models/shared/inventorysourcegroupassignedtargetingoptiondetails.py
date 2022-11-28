from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InventorySourceGroupAssignedTargetingOptionDetails:
    r"""InventorySourceGroupAssignedTargetingOptionDetails
    Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.
    """
    
    inventory_source_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceGroupId') }})
    
