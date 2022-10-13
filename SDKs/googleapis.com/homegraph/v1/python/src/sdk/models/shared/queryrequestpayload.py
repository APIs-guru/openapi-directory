from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import agentdeviceid


@dataclass_json
@dataclass
class QueryRequestPayload:
    devices: Optional[List[agentdeviceid.AgentDeviceID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    
