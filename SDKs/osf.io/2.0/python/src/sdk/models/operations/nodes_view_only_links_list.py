from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesViewOnlyLinksListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesViewOnlyLinksListRequest:
    path_params: NodesViewOnlyLinksListPathParams = field()
    

@dataclass
class NodesViewOnlyLinksListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
