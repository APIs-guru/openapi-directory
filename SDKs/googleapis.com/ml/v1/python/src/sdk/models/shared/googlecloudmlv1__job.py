from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__predictioninput
from . import googlecloudmlv1__predictionoutput
from . import googlecloudmlv1__traininginput
from . import googlecloudmlv1__trainingoutput

class GoogleCloudMlV1JobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    PREPARING = "PREPARING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class GoogleCloudMlV1Job:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobPosition' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    prediction_input: Optional[googlecloudmlv1__predictioninput.GoogleCloudMlV1PredictionInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictionInput' }})
    prediction_output: Optional[googlecloudmlv1__predictionoutput.GoogleCloudMlV1PredictionOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictionOutput' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudMlV1JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    training_input: Optional[googlecloudmlv1__traininginput.GoogleCloudMlV1TrainingInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingInput' }})
    training_output: Optional[googlecloudmlv1__trainingoutput.GoogleCloudMlV1TrainingOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingOutput' }})
    
