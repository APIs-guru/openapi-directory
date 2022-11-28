from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1CardFixedFooter:
    r"""GoogleAppsCardV1CardFixedFooter
    A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. Chat apps support `fixedFooter` in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not in [card messages](https://developers.google.com/chat/api/guides/message-formats/cards).
    """
    
    primary_button: Optional[GoogleAppsCardV1Button] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryButton') }})
    secondary_button: Optional[GoogleAppsCardV1Button] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryButton') }})
    
