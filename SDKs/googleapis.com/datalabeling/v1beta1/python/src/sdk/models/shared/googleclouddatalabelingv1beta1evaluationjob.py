from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SCHEDULED = "SCHEDULED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    STOPPED = "STOPPED"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJob:
    r"""GoogleCloudDatalabelingV1beta1EvaluationJob
    Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
    """
    
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    attempts: Optional[List[GoogleCloudDatalabelingV1beta1Attempt]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    evaluation_job_config: Optional[GoogleCloudDatalabelingV1beta1EvaluationJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationJobConfig') }})
    label_missing_ground_truth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelMissingGroundTruth') }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    state: Optional[GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
