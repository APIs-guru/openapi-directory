from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sessioninfo
from . import userdto


@dataclass_json
@dataclass
class AuthenticationResult:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    session_info: Optional[sessioninfo.SessionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionInfo' }})
    user: Optional[userdto.UserDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    
