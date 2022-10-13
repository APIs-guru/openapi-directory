from dataclasses import dataclass, field
from typing import List


@dataclass
class NodesChildrenListPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesChildrenListRequest:
    path_params: NodesChildrenListPathParams = field(default=None)
    

@dataclass
class NodesChildrenListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
