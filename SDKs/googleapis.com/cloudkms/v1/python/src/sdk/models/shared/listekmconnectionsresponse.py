from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ekmconnection


@dataclass_json
@dataclass
class ListEkmConnectionsResponse:
    ekm_connections: Optional[List[ekmconnection.EkmConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ekmConnections' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
