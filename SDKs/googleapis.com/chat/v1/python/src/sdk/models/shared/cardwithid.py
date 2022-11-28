from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CardWithID:
    r"""CardWithID
    Widgets for Chat apps to specify.
    """
    
    card: Optional[GoogleAppsCardV1Card] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    card_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardId') }})
    
