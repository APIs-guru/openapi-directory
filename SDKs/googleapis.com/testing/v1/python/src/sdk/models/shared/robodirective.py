from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RoboDirectiveActionTypeEnum(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    SINGLE_CLICK = "SINGLE_CLICK"
    ENTER_TEXT = "ENTER_TEXT"
    IGNORE = "IGNORE"


@dataclass_json
@dataclass
class RoboDirective:
    r"""RoboDirective
    Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.
    """
    
    action_type: Optional[RoboDirectiveActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    input_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputText') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    
