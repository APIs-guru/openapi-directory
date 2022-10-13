from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datacenterconnector


@dataclass_json
@dataclass
class ListDatacenterConnectorsResponse:
    datacenter_connectors: Optional[List[datacenterconnector.DatacenterConnector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenterConnectors' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
