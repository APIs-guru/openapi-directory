from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sasportalnode


@dataclass_json
@dataclass
class SasPortalListNodesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    nodes: Optional[List[sasportalnode.SasPortalNode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    
