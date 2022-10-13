from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import privateconnection


@dataclass_json
@dataclass
class ListPrivateConnectionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    private_connections: Optional[List[privateconnection.PrivateConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateConnections' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
