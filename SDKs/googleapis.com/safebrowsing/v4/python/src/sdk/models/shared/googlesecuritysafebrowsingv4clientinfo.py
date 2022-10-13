from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4ClientInfo:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientVersion' }})
    
