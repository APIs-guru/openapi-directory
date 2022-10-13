from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationcycle


@dataclass_json
@dataclass
class ListReplicationCyclesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    replication_cycles: Optional[List[replicationcycle.ReplicationCycle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationCycles' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
