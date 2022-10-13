from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateUserEasyPassword:
    new_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewPassword' }})
    new_pw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewPw' }})
    reset_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResetPassword' }})
    
