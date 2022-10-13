from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SignJwtResponse:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyId' }})
    signed_jwt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signedJwt' }})
    
