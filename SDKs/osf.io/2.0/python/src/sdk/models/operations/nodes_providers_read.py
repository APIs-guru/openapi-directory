from dataclasses import dataclass, field



@dataclass
class NodesProvidersReadPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesProvidersReadRequest:
    path_params: NodesProvidersReadPathParams = field(default=None)
    

@dataclass
class NodesProvidersReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
