from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CostEstimate:
    r"""CostEstimate
    An estimated cost.
    """
    
    credit_estimates: Optional[List[CreditEstimate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditEstimates') }})
    net_cost_estimate: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netCostEstimate') }})
    pre_credit_cost_estimate: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preCreditCostEstimate') }})
    
