from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channelconnection


@dataclass_json
@dataclass
class ListChannelConnectionsResponse:
    channel_connections: Optional[List[channelconnection.ChannelConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelConnections' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
