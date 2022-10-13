from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dialogaction

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
    dialog_action: Optional[dialogaction.DialogAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogAction' }})
    type: Optional[ActionResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
