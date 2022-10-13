from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SyncRequest:
    agent_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentUserId' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
