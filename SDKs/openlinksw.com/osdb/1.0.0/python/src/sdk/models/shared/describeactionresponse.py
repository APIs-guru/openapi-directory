from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DescribeActionResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class DescribeActionResponse:
    api: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: ActionDescription = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: DescribeActionResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
