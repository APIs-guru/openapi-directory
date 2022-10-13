from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthToken:
    auth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authToken' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
