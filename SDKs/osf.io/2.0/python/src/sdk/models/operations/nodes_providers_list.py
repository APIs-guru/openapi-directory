from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesProvidersListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesProvidersListRequest:
    path_params: NodesProvidersListPathParams = field()
    

@dataclass
class NodesProvidersListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
