from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoginResponseResponse:
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class LoginResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class LoginResponse:
    api: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: LoginResponseResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: LoginResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
