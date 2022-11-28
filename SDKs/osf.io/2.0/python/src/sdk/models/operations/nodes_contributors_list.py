from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesContributorsListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesContributorsListRequest:
    path_params: NodesContributorsListPathParams = field()
    

@dataclass
class NodesContributorsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
