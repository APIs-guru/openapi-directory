from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2WithdrawMfaResponse:
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    
