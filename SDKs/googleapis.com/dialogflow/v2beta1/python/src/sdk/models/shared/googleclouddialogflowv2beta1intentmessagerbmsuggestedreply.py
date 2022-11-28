from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply:
    r"""GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply
    Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.
    """
    
    postback_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postbackData') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
