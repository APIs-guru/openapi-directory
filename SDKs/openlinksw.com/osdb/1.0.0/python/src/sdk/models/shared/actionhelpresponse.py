from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import actionhelp

class ActionHelpResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class ActionHelpResponse:
    api: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: actionhelp.ActionHelp = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: ActionHelpResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
