from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SkuCostEstimate:
    r"""SkuCostEstimate
    Estimated cost for usage on a SKU.
    """
    
    cost_estimate: Optional[CostEstimate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costEstimate') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    usage_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageAmount') }})
    usage_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageUnit') }})
    
