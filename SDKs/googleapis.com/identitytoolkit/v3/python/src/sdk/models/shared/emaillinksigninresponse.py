from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmailLinkSigninResponse:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresIn' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    is_new_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNewUser' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    local_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localId' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    
