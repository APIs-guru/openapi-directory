from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion:
    r"""GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion
    The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
    """
    
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationName') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
