from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1feedbackmessage


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse:
    feedback_messages: Optional[List[googleclouddatalabelingv1beta1feedbackmessage.GoogleCloudDatalabelingV1beta1FeedbackMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedbackMessages' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
