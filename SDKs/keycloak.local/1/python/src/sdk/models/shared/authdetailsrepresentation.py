from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthDetailsRepresentation:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    realm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realmId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
