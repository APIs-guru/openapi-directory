from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ListActionsResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class ListActionsResponse:
    api: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: List[ActionDescription] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: ListActionsResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
