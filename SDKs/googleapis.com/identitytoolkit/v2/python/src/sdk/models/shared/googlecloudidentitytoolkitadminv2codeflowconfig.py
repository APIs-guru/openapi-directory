from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyId' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKey' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    
