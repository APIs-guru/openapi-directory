from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import capool


@dataclass_json
@dataclass
class ListCaPoolsResponse:
    ca_pools: Optional[List[capool.CaPool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caPools' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
