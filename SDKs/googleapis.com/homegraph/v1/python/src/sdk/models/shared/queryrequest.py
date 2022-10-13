from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queryrequestinput


@dataclass_json
@dataclass
class QueryRequest:
    agent_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentUserId' }})
    inputs: Optional[List[queryrequestinput.QueryRequestInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
