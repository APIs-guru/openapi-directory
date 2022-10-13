from dataclasses import dataclass, field
from typing import List


@dataclass
class NodesContributorsListPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesContributorsListRequest:
    path_params: NodesContributorsListPathParams = field(default=None)
    

@dataclass
class NodesContributorsListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
