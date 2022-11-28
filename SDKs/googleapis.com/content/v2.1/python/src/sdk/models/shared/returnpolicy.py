from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReturnPolicy:
    r"""ReturnPolicy
    Return policy resource.
    """
    
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    non_free_return_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonFreeReturnReasons') }})
    policy: Optional[ReturnPolicyPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    return_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPolicyId') }})
    return_shipping_fee: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShippingFee') }})
    seasonal_overrides: Optional[List[ReturnPolicySeasonalOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonalOverrides') }})
    
