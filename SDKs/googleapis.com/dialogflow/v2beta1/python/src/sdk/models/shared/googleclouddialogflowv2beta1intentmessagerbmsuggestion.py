from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion:
    r"""GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion
    Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).
    """
    
    action: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    reply: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply') }})
    
