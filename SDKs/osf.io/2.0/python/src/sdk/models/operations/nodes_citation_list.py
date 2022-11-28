from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesCitationListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesCitationListRequest:
    path_params: NodesCitationListPathParams = field()
    

@dataclass
class NodesCitationListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
