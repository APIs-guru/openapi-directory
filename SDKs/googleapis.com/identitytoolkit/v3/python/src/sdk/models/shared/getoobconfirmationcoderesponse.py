from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetOobConfirmationCodeResponse:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    oob_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oobCode' }})
    
