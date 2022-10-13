from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RoboDirectiveActionTypeEnum(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    SINGLE_CLICK = "SINGLE_CLICK"
    ENTER_TEXT = "ENTER_TEXT"
    IGNORE = "IGNORE"


@dataclass_json
@dataclass
class RoboDirective:
    action_type: Optional[RoboDirectiveActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    input_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputText' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    
