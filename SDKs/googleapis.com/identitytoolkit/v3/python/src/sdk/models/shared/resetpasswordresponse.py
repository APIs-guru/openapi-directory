from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResetPasswordResponse:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    new_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newEmail' }})
    request_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestType' }})
    
