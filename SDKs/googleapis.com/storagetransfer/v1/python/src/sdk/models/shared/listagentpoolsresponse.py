from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import agentpool


@dataclass_json
@dataclass
class ListAgentPoolsResponse:
    agent_pools: Optional[List[agentpool.AgentPool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentPools' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
