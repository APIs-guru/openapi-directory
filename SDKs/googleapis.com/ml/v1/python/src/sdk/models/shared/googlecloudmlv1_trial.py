from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudMlV1TrialStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    REQUESTED = "REQUESTED"
    ACTIVE = "ACTIVE"
    COMPLETED = "COMPLETED"
    STOPPING = "STOPPING"


@dataclass_json
@dataclass
class GoogleCloudMlV1Trial:
    r"""GoogleCloudMlV1Trial
    A message representing a trial.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    final_measurement: Optional[GoogleCloudMlV1Measurement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalMeasurement') }})
    infeasible_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infeasibleReason') }})
    measurements: Optional[List[GoogleCloudMlV1Measurement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurements') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[List[GoogleCloudMlV1TrialParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GoogleCloudMlV1TrialStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    trial_infeasible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialInfeasible') }})
    

@dataclass_json
@dataclass
class GoogleCloudMlV1TrialInput:
    r"""GoogleCloudMlV1TrialInput
    A message representing a trial.
    """
    
    final_measurement: Optional[GoogleCloudMlV1Measurement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalMeasurement') }})
    measurements: Optional[List[GoogleCloudMlV1Measurement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurements') }})
    parameters: Optional[List[GoogleCloudMlV1TrialParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    state: Optional[GoogleCloudMlV1TrialStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
