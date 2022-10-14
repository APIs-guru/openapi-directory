from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TokenResponseIf:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    expires_in: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id_token' }})
    refresh_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    token_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    
