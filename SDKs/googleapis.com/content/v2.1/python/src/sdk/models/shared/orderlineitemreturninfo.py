from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrderLineItemReturnInfo:
    days_to_return: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysToReturn') }})
    is_returnable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReturnable') }})
    policy_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyUrl') }})
    
