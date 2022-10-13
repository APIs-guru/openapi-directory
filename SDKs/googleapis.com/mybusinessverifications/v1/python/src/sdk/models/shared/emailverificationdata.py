from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmailVerificationData:
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    is_user_name_editable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUserNameEditable' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
