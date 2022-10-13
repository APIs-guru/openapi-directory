from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import costestimate
from . import skucostestimate


@dataclass_json
@dataclass
class CommitmentCostEstimate:
    commitment_total_cost_estimate: Optional[costestimate.CostEstimate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitmentTotalCostEstimate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sku_cost_estimates: Optional[List[skucostestimate.SkuCostEstimate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuCostEstimates' }})
    
