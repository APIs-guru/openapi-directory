from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1CardAction:
    r"""GoogleAppsCardV1CardAction
    A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. Not supported by Chat apps.
    """
    
    action_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionLabel') }})
    on_click: Optional[GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onClick') }})
    
