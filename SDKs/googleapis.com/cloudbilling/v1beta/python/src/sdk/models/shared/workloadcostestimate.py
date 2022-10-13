from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import skucostestimate
from . import costestimate


@dataclass_json
@dataclass
class WorkloadCostEstimate:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sku_cost_estimates: Optional[List[skucostestimate.SkuCostEstimate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuCostEstimates' }})
    workload_total_cost_estimate: Optional[costestimate.CostEstimate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadTotalCostEstimate' }})
    
