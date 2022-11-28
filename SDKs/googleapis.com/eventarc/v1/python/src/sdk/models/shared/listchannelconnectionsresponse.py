from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListChannelConnectionsResponse:
    r"""ListChannelConnectionsResponse
    The response message for the `ListChannelConnections` method.
    """
    
    channel_connections: Optional[List[ChannelConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelConnections') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
