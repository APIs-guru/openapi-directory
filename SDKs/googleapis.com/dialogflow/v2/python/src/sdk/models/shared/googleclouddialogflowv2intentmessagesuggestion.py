from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageSuggestion:
    r"""GoogleCloudDialogflowV2IntentMessageSuggestion
    The suggestion chip message that the user can tap to quickly post a reply to the conversation.
    """
    
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
