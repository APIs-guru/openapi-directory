from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CostEstimationResult:
    r"""CostEstimationResult
    The result of a estimating the costs of a `CostScenario`.
    """
    
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    segment_cost_estimates: Optional[List[SegmentCostEstimate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentCostEstimates') }})
    skus: Optional[List[Sku]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skus') }})
    
