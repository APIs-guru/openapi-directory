from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__measurement


@dataclass_json
@dataclass
class GoogleCloudMlV1CompleteTrialRequest:
    final_measurement: Optional[googlecloudmlv1__measurement.GoogleCloudMlV1Measurement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalMeasurement' }})
    infeasible_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infeasibleReason' }})
    trial_infeasible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialInfeasible' }})
    
