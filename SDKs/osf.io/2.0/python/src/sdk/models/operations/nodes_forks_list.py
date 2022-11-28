from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesForksListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesForksListRequest:
    path_params: NodesForksListPathParams = field()
    

@dataclass
class NodesForksListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
