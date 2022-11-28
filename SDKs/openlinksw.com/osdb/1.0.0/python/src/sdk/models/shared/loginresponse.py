from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LoginResponseResponse:
    user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
class LoginResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class LoginResponse:
    api: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: LoginResponseResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: LoginResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
