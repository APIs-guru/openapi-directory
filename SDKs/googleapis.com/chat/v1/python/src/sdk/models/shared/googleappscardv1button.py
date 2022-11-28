from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1Button:
    r"""GoogleAppsCardV1Button
    A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action.
    """
    
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    icon: Optional[GoogleAppsCardV1Icon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    on_click: Optional[GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onClick') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
