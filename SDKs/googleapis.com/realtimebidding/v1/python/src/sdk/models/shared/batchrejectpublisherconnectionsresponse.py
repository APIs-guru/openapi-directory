from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchRejectPublisherConnectionsResponse:
    r"""BatchRejectPublisherConnectionsResponse
    A response for the request to reject a batch of publisher connections.
    """
    
    publisher_connections: Optional[List[PublisherConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherConnections') }})
    
