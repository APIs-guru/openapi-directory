from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PasswordStatus:
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    password_expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordExpirationTime' }})
    
