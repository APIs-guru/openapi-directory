from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesContributorsReadPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesContributorsReadRequest:
    path_params: NodesContributorsReadPathParams = field()
    

@dataclass
class NodesContributorsReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
