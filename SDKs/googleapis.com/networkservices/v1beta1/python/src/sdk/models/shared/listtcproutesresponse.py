from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tcproute


@dataclass_json
@dataclass
class ListTCPRoutesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tcp_routes: Optional[List[tcproute.TCPRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tcpRoutes' }})
    
