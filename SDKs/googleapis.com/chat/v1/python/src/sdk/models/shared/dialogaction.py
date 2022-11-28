from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DialogAction:
    r"""DialogAction
    Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
    """
    
    action_status: Optional[ActionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionStatus') }})
    dialog: Optional[Dialog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialog') }})
    
