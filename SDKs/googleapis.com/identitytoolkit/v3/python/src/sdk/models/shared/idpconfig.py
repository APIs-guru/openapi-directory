from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdpConfig:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    experiment_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentPercent' }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    whitelisted_audiences: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whitelistedAudiences' }})
    
