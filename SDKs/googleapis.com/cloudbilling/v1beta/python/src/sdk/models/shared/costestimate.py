from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import creditestimate
from . import money
from . import money


@dataclass_json
@dataclass
class CostEstimate:
    credit_estimates: Optional[List[creditestimate.CreditEstimate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditEstimates' }})
    net_cost_estimate: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netCostEstimate' }})
    pre_credit_cost_estimate: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preCreditCostEstimate' }})
    
