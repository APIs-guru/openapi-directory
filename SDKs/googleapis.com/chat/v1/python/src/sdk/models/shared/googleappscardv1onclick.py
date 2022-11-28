from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1OnClick:
    r"""GoogleAppsCardV1OnClick
    Represents how to respond when users click an interactive element on a card, such as a button.
    """
    
    action: Optional[GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    card: Optional[GoogleAppsCardV1Card] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    open_dynamic_link_action: Optional[GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openDynamicLinkAction') }})
    open_link: Optional[GoogleAppsCardV1OpenLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openLink') }})
    
