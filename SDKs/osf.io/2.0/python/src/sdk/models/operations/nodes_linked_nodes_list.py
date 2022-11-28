from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesLinkedNodesListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesLinkedNodesListRequest:
    path_params: NodesLinkedNodesListPathParams = field()
    

@dataclass
class NodesLinkedNodesListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
