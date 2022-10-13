from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2smartreplyanswer


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SuggestSmartRepliesResponse:
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextSize' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    smart_reply_answers: Optional[List[googleclouddialogflowv2smartreplyanswer.GoogleCloudDialogflowV2SmartReplyAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartReplyAnswers' }})
    
