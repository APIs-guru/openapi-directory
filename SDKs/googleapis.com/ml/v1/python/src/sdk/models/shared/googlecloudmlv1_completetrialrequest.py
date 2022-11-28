from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1CompleteTrialRequest:
    r"""GoogleCloudMlV1CompleteTrialRequest
    The request message for the CompleteTrial service method.
    """
    
    final_measurement: Optional[GoogleCloudMlV1Measurement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalMeasurement') }})
    infeasible_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infeasibleReason') }})
    trial_infeasible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialInfeasible') }})
    
