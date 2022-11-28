from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LineItemAssignedTargetingOption:
    r"""LineItemAssignedTargetingOption
    Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to.
    """
    
    assigned_targeting_option: Optional[AssignedTargetingOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedTargetingOption') }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    
