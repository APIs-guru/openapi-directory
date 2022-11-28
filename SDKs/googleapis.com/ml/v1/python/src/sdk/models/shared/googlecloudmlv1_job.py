from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudMlV1Job
    Represents a training or prediction job.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobPosition') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    prediction_input: Optional[GoogleCloudMlV1PredictionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionInput') }})
    prediction_output: Optional[GoogleCloudMlV1PredictionOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionOutput') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GoogleCloudMlV1JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    training_input: Optional[GoogleCloudMlV1TrainingInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingInput') }})
    training_output: Optional[GoogleCloudMlV1TrainingOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingOutput') }})
    

@dataclass_json
@dataclass
class GoogleCloudMlV1JobInput:
    r"""GoogleCloudMlV1JobInput
    Represents a training or prediction job.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    prediction_input: Optional[GoogleCloudMlV1PredictionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionInput') }})
    prediction_output: Optional[GoogleCloudMlV1PredictionOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionOutput') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GoogleCloudMlV1JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    training_input: Optional[GoogleCloudMlV1TrainingInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingInput') }})
    training_output: Optional[GoogleCloudMlV1TrainingOutputInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingOutput') }})
    
