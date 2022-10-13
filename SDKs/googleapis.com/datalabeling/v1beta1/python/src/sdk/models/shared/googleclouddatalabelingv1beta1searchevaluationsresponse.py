from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1evaluation


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse:
    evaluations: Optional[List[googleclouddatalabelingv1beta1evaluation.GoogleCloudDatalabelingV1beta1Evaluation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
