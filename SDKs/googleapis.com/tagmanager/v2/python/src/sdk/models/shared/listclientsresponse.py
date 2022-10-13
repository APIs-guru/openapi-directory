from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import client


@dataclass_json
@dataclass
class ListClientsResponse:
    client: Optional[List[client.Client]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
