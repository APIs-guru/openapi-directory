from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1smartreplyanswer


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse:
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextSize' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    smart_reply_answers: Optional[List[googleclouddialogflowv2beta1smartreplyanswer.GoogleCloudDialogflowV2beta1SmartReplyAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartReplyAnswers' }})
    
