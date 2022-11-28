from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse:
    r"""GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse
    The response message for Participants.SuggestSmartReplies.
    """
    
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextSize') }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestMessage') }})
    smart_reply_answers: Optional[List[GoogleCloudDialogflowV2beta1SmartReplyAnswer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartReplyAnswers') }})
    
