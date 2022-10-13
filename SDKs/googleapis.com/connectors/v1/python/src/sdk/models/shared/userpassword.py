from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import secret


@dataclass_json
@dataclass
class UserPassword:
    password: Optional[secret.Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
