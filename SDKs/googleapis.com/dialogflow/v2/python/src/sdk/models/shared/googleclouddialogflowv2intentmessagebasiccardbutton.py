from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageBasicCardButton:
    r"""GoogleCloudDialogflowV2IntentMessageBasicCardButton
    The button object that appears at the bottom of a card.
    """
    
    open_uri_action: Optional[GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openUriAction') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
