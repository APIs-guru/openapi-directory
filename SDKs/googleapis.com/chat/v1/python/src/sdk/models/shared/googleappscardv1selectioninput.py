from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1selectionitem
from . import googleappscardv1action

class GoogleAppsCardV1SelectionInputTypeEnum(str, Enum):
    CHECK_BOX = "CHECK_BOX"
    RADIO_BUTTON = "RADIO_BUTTON"
    SWITCH = "SWITCH"
    DROPDOWN = "DROPDOWN"


@dataclass_json
@dataclass
class GoogleAppsCardV1SelectionInput:
    items: Optional[List[googleappscardv1selectionitem.GoogleAppsCardV1SelectionItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    on_change_action: Optional[googleappscardv1action.GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onChangeAction' }})
    type: Optional[GoogleAppsCardV1SelectionInputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
