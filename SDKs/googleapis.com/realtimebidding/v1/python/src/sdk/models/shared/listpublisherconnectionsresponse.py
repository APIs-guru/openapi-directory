from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPublisherConnectionsResponse:
    r"""ListPublisherConnectionsResponse
    A response to a request for listing publisher connections.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    publisher_connections: Optional[List[PublisherConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherConnections') }})
    
