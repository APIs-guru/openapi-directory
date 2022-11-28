from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1AutomatedStoppingConfig:
    r"""GoogleCloudMlV1AutomatedStoppingConfig
    Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.
    """
    
    decay_curve_stopping_config: Optional[GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decayCurveStoppingConfig') }})
    median_automated_stopping_config: Optional[GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medianAutomatedStoppingConfig') }})
    
