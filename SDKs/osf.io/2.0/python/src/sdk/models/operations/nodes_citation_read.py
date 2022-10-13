from dataclasses import dataclass, field



@dataclass
class NodesCitationReadPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    style_id: str = field(default=None, metadata={'path_param': { 'field_name': 'style_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesCitationReadRequest:
    path_params: NodesCitationReadPathParams = field(default=None)
    

@dataclass
class NodesCitationReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
