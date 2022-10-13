from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import costestimationresult


@dataclass_json
@dataclass
class EstimateCostScenarioWithListPriceResponse:
    cost_estimation_result: Optional[costestimationresult.CostEstimationResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costEstimationResult' }})
    
