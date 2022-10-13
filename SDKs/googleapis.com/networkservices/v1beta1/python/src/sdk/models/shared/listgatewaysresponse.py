from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gateway


@dataclass_json
@dataclass
class ListGatewaysResponse:
    gateways: Optional[List[gateway.Gateway]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateways' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
