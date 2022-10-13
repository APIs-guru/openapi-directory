from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1attempt
from . import googleclouddatalabelingv1beta1evaluationjobconfig

class GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SCHEDULED = "SCHEDULED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    STOPPED = "STOPPED"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJob:
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecSet' }})
    attempts: Optional[List[googleclouddatalabelingv1beta1attempt.GoogleCloudDatalabelingV1beta1Attempt]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attempts' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    evaluation_job_config: Optional[googleclouddatalabelingv1beta1evaluationjobconfig.GoogleCloudDatalabelingV1beta1EvaluationJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationJobConfig' }})
    label_missing_ground_truth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelMissingGroundTruth' }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    state: Optional[GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
