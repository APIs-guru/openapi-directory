from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthenticationResult:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    session_info: Optional[SessionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionInfo') }})
    user: Optional[UserDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
