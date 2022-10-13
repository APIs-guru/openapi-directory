from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1feedbackthreadmetadata


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1FeedbackThread:
    feedback_thread_metadata: Optional[googleclouddatalabelingv1beta1feedbackthreadmetadata.GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedbackThreadMetadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
