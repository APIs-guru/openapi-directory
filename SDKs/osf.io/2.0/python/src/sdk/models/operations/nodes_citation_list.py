from dataclasses import dataclass, field
from typing import List


@dataclass
class NodesCitationListPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesCitationListRequest:
    path_params: NodesCitationListPathParams = field(default=None)
    

@dataclass
class NodesCitationListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
