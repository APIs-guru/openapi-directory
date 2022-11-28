from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesWikisListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesWikisListRequest:
    path_params: NodesWikisListPathParams = field()
    

@dataclass
class NodesWikisListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
