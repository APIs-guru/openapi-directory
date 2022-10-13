from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import costestimationresult


@dataclass_json
@dataclass
class EstimateCostScenarioForBillingAccountResponse:
    cost_estimation_result: Optional[costestimationresult.CostEstimationResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costEstimationResult' }})
    
