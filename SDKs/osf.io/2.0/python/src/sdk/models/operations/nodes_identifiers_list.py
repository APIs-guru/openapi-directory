from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesIdentifiersListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesIdentifiersListRequest:
    path_params: NodesIdentifiersListPathParams = field()
    

@dataclass
class NodesIdentifiersListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
