from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetAuthinfo200ApplicationJSONAuthMethodEnum(str, Enum):
    USER_SESSION = "user_session"
    INTERNAL = "internal"
    STATIC_API_KEY = "static_api_key"


@dataclass_json
@dataclass
class GetAuthinfo200ApplicationJSONPermissions:
    mutate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutate') }})
    

@dataclass_json
@dataclass
class GetAuthinfo200ApplicationJSON:
    api_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key_id') }})
    auth_method: Optional[GetAuthinfo200ApplicationJSONAuthMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_method') }})
    authenticated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticated') }})
    permissions: Optional[GetAuthinfo200ApplicationJSONPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclass
class GetAuthinfoResponse:
    content_type: str = field()
    status_code: int = field()
    get_authinfo_200_application_json_object: Optional[GetAuthinfo200ApplicationJSON] = field(default=None)
    
