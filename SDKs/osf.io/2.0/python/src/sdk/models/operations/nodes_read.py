from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesReadPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesReadRequest:
    path_params: NodesReadPathParams = field()
    

@dataclass
class NodesReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
