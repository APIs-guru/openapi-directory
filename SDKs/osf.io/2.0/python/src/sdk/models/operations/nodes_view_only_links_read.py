from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesViewOnlyLinksReadPathParams:
    link_id: str = field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesViewOnlyLinksReadRequest:
    path_params: NodesViewOnlyLinksReadPathParams = field()
    

@dataclass
class NodesViewOnlyLinksReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
