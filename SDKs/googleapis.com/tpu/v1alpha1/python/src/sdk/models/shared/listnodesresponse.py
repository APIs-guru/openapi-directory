from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import node


@dataclass_json
@dataclass
class ListNodesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    nodes: Optional[List[node.Node]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
