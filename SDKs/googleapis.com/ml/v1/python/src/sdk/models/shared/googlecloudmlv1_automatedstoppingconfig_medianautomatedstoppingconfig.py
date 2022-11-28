from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig:
    r"""GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig
    The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement.
    """
    
    use_elapsed_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useElapsedTime') }})
    
