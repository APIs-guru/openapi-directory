from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsCardV1SelectionInputTypeEnum(str, Enum):
    CHECK_BOX = "CHECK_BOX"
    RADIO_BUTTON = "RADIO_BUTTON"
    SWITCH = "SWITCH"
    DROPDOWN = "DROPDOWN"


@dataclass_json
@dataclass
class GoogleAppsCardV1SelectionInput:
    r"""GoogleAppsCardV1SelectionInput
    A widget that creates a UI item with options for users to select. For example, a dropdown menu or check list. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect data from users that matches options you set, use a selection input. To collect abstract data from users, use the text input widget instead. Only supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) coming soon.
    """
    
    items: Optional[List[GoogleAppsCardV1SelectionItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    on_change_action: Optional[GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onChangeAction') }})
    type: Optional[GoogleAppsCardV1SelectionInputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
