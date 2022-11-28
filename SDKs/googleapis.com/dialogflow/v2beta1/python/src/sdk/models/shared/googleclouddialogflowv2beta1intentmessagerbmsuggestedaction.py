from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction:
    r"""GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction
    Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
    """
    
    dial: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dial') }})
    open_url: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openUrl') }})
    postback_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postbackData') }})
    share_location: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareLocation') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
