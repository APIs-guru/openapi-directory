from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import returnpolicypolicy
from . import price
from . import returnpolicyseasonaloverride


@dataclass_json
@dataclass
class ReturnPolicy:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    non_free_return_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonFreeReturnReasons' }})
    policy: Optional[returnpolicypolicy.ReturnPolicyPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    return_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPolicyId' }})
    return_shipping_fee: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnShippingFee' }})
    seasonal_overrides: Optional[List[returnpolicyseasonaloverride.ReturnPolicySeasonalOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasonalOverrides' }})
    
