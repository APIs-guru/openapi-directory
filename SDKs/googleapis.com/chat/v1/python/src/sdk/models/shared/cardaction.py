from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CardAction:
    r"""CardAction
    A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.
    """
    
    action_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionLabel') }})
    on_click: Optional[OnClick] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onClick') }})
    
