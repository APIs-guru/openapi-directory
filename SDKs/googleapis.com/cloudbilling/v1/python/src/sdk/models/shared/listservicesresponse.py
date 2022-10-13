from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import service


@dataclass_json
@dataclass
class ListServicesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    services: Optional[List[service.Service]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
