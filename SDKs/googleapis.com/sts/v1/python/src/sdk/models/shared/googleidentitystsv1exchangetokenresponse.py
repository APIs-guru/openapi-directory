from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleIdentityStsV1ExchangeTokenResponse:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    issued_token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issued_token_type' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    
