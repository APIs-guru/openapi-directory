from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import device


@dataclass_json
@dataclass
class SyncResponsePayload:
    agent_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentUserId' }})
    devices: Optional[List[device.Device]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    
