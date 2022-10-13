from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1evaluationjob


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse:
    evaluation_jobs: Optional[List[googleclouddatalabelingv1beta1evaluationjob.GoogleCloudDatalabelingV1beta1EvaluationJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationJobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
