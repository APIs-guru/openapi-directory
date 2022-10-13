from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RefreshTokenInfoResponse:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    hub_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hub_domain' }})
    hub_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hub_id' }})
    scopes: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    token_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    user_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
