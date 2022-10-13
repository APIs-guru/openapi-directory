from dataclasses import dataclass, field



@dataclass
class NodesDeletePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesDeleteRequest:
    path_params: NodesDeletePathParams = field(default=None)
    

@dataclass
class NodesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
