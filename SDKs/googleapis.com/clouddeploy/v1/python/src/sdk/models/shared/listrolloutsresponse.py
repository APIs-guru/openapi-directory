from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rollout


@dataclass_json
@dataclass
class ListRolloutsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    rollouts: Optional[List[rollout.Rollout]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollouts' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
