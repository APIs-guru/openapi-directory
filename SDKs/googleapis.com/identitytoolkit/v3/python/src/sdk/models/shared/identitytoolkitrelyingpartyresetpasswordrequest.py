from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyResetPasswordRequest:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    new_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPassword' }})
    old_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldPassword' }})
    oob_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oobCode' }})
    
