from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1DecoratedText:
    r"""GoogleAppsCardV1DecoratedText
    A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
    """
    
    bottom_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottomLabel') }})
    button: Optional[GoogleAppsCardV1Button] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('button') }})
    end_icon: Optional[GoogleAppsCardV1Icon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIcon') }})
    icon: Optional[GoogleAppsCardV1Icon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    on_click: Optional[GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onClick') }})
    start_icon: Optional[GoogleAppsCardV1Icon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIcon') }})
    switch_control: Optional[GoogleAppsCardV1SwitchControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchControl') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    top_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLabel') }})
    wrap_text: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wrapText') }})
    
