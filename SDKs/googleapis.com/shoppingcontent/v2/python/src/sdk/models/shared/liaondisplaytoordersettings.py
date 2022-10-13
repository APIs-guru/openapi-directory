from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiaOnDisplayToOrderSettings:
    shipping_cost_policy_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCostPolicyUrl' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
