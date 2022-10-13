from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import costestimate


@dataclass_json
@dataclass
class SkuCostEstimate:
    cost_estimate: Optional[costestimate.CostEstimate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costEstimate' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    usage_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageAmount' }})
    usage_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageUnit' }})
    
