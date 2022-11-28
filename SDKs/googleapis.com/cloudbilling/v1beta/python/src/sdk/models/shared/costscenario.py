from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CostScenario:
    r"""CostScenario
    Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
    """
    
    commitments: Optional[List[Commitment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitments') }})
    scenario_config: Optional[ScenarioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarioConfig') }})
    workloads: Optional[List[Workload]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloads') }})
    
