from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publisherconnection


@dataclass_json
@dataclass
class BatchRejectPublisherConnectionsResponse:
    publisher_connections: Optional[List[publisherconnection.PublisherConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherConnections' }})
    
