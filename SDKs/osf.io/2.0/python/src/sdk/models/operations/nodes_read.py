from dataclasses import dataclass, field



@dataclass
class NodesReadPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesReadRequest:
    path_params: NodesReadPathParams = field(default=None)
    

@dataclass
class NodesReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
