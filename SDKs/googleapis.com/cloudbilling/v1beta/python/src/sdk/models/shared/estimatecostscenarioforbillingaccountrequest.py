from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import costscenario


@dataclass_json
@dataclass
class EstimateCostScenarioForBillingAccountRequest:
    cost_scenario: Optional[costscenario.CostScenario] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costScenario' }})
    
