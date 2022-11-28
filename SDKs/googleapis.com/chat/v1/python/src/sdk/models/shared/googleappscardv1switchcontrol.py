from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsCardV1SwitchControlControlTypeEnum(str, Enum):
    SWITCH = "SWITCH"
    CHECKBOX = "CHECKBOX"
    CHECK_BOX = "CHECK_BOX"


@dataclass_json
@dataclass
class GoogleAppsCardV1SwitchControl:
    r"""GoogleAppsCardV1SwitchControl
    Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget. Currently supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) is coming soon.
    """
    
    control_type: Optional[GoogleAppsCardV1SwitchControlControlTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    on_change_action: Optional[GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onChangeAction') }})
    selected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
