from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import commitment
from . import scenarioconfig
from . import workload


@dataclass_json
@dataclass
class CostScenario:
    commitments: Optional[List[commitment.Commitment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitments' }})
    scenario_config: Optional[scenarioconfig.ScenarioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scenarioConfig' }})
    workloads: Optional[List[workload.Workload]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloads' }})
    
