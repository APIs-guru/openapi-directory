from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ActionResponseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    NEW_MESSAGE = "NEW_MESSAGE"
    UPDATE_MESSAGE = "UPDATE_MESSAGE"
    UPDATE_USER_MESSAGE_CARDS = "UPDATE_USER_MESSAGE_CARDS"
    REQUEST_CONFIG = "REQUEST_CONFIG"
    DIALOG = "DIALOG"


@dataclass_json
@dataclass
class ActionResponse:
    r"""ActionResponse
    Parameters that a Chat app can use to configure how it's response is posted.
    """
    
    dialog_action: Optional[DialogAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogAction') }})
    type: Optional[ActionResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
