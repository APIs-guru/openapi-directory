from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LogoutResponseResponse:
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class LogoutResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class LogoutResponse:
    api: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: LogoutResponseResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: LogoutResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
