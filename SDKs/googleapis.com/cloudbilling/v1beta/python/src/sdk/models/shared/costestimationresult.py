from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import segmentcostestimate
from . import sku


@dataclass_json
@dataclass
class CostEstimationResult:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    segment_cost_estimates: Optional[List[segmentcostestimate.SegmentCostEstimate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentCostEstimates' }})
    skus: Optional[List[sku.Sku]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skus' }})
    
