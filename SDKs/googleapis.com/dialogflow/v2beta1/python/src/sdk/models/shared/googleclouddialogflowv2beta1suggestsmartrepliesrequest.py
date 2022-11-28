from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest:
    r"""GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest
    The request message for Participants.SuggestSmartReplies.
    """
    
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextSize') }})
    current_text_input: Optional[GoogleCloudDialogflowV2beta1TextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentTextInput') }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestMessage') }})
    
