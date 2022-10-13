from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyEmailLinkSigninRequest:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    oob_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oobCode' }})
    
