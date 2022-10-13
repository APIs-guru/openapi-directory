from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__measurement
from . import googlecloudmlv1__measurement
from . import googlecloudmlv1_trial_parameter

class GoogleCloudMlV1TrialStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    REQUESTED = "REQUESTED"
    ACTIVE = "ACTIVE"
    COMPLETED = "COMPLETED"
    STOPPING = "STOPPING"


@dataclass_json
@dataclass
class GoogleCloudMlV1Trial:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    final_measurement: Optional[googlecloudmlv1__measurement.GoogleCloudMlV1Measurement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalMeasurement' }})
    infeasible_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infeasibleReason' }})
    measurements: Optional[List[googlecloudmlv1__measurement.GoogleCloudMlV1Measurement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurements' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: Optional[List[googlecloudmlv1_trial_parameter.GoogleCloudMlV1TrialParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudMlV1TrialStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    trial_infeasible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialInfeasible' }})
    
