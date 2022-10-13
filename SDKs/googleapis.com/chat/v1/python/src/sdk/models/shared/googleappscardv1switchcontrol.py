from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1action

class GoogleAppsCardV1SwitchControlControlTypeEnum(str, Enum):
    SWITCH = "SWITCH"
    CHECKBOX = "CHECKBOX"
    CHECK_BOX = "CHECK_BOX"


@dataclass_json
@dataclass
class GoogleAppsCardV1SwitchControl:
    control_type: Optional[GoogleAppsCardV1SwitchControlControlTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    on_change_action: Optional[googleappscardv1action.GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onChangeAction' }})
    selected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
