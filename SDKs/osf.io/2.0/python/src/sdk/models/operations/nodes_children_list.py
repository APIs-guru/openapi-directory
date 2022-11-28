from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesChildrenListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesChildrenListRequest:
    path_params: NodesChildrenListPathParams = field()
    

@dataclass
class NodesChildrenListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
