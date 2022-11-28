from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesCommentsListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesCommentsListRequest:
    path_params: NodesCommentsListPathParams = field()
    

@dataclass
class NodesCommentsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
