from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authtoken
from . import userdata


@dataclass_json
@dataclass
class Account:
    auth_tokens: Optional[List[authtoken.AuthToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authTokens' }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    user_data: Optional[List[userdata.UserData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userData' }})
    
