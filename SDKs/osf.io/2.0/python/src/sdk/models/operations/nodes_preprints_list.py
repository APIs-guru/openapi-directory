from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesPreprintsListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesPreprintsListRequest:
    path_params: NodesPreprintsListPathParams = field()
    

@dataclass
class NodesPreprintsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
