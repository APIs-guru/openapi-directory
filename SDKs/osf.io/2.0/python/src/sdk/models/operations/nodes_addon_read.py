from dataclasses import dataclass, field



@dataclass
class NodesAddonReadPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesAddonReadRequest:
    path_params: NodesAddonReadPathParams = field(default=None)
    

@dataclass
class NodesAddonReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
