from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SessionResponse:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresIn' }})
    refresh_expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshExpiresIn' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenType' }})
    
