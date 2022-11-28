from dataclasses import dataclass, field



@dataclass
class NodesDeletePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesDeleteRequest:
    path_params: NodesDeletePathParams = field()
    

@dataclass
class NodesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
