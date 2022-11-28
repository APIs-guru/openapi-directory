from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsCardV1TextInputTypeEnum(str, Enum):
    SINGLE_LINE = "SINGLE_LINE"
    MULTIPLE_LINE = "MULTIPLE_LINE"


@dataclass_json
@dataclass
class GoogleAppsCardV1TextInput:
    r"""GoogleAppsCardV1TextInput
    A field in which users can enter text. Supports suggestions and on-change actions. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect abstract data from users, use a text input. To collect defined data from users, use the selection input widget instead. Only supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) coming soon.
    """
    
    auto_complete_action: Optional[GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoCompleteAction') }})
    hint_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hintText') }})
    initial_suggestions: Optional[GoogleAppsCardV1Suggestions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialSuggestions') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    on_change_action: Optional[GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onChangeAction') }})
    type: Optional[GoogleAppsCardV1TextInputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
