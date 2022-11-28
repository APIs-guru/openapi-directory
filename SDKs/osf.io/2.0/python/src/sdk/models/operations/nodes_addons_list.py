from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesAddonsListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesAddonsListRequest:
    path_params: NodesAddonsListPathParams = field()
    

@dataclass
class NodesAddonsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
