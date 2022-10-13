from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1evaluationjob


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest:
    job: Optional[googleclouddatalabelingv1beta1evaluationjob.GoogleCloudDatalabelingV1beta1EvaluationJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    
