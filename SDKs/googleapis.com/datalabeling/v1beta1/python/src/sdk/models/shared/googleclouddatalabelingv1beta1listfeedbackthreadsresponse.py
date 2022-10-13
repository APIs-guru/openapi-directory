from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1feedbackthread


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse:
    feedback_threads: Optional[List[googleclouddatalabelingv1beta1feedbackthread.GoogleCloudDatalabelingV1beta1FeedbackThread]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedbackThreads' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
