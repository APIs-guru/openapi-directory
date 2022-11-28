from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkloadCostEstimate:
    r"""WorkloadCostEstimate
    Estimated cost for a workload.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sku_cost_estimates: Optional[List[SkuCostEstimate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuCostEstimates') }})
    workload_total_cost_estimate: Optional[CostEstimate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadTotalCostEstimate') }})
    
