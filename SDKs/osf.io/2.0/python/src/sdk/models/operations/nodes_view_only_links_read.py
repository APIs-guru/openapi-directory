from dataclasses import dataclass, field



@dataclass
class NodesViewOnlyLinksReadPathParams:
    link_id: str = field(default=None, metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesViewOnlyLinksReadRequest:
    path_params: NodesViewOnlyLinksReadPathParams = field(default=None)
    

@dataclass
class NodesViewOnlyLinksReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
