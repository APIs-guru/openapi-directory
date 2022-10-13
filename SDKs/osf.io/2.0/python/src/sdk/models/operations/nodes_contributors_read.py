from dataclasses import dataclass, field



@dataclass
class NodesContributorsReadPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesContributorsReadRequest:
    path_params: NodesContributorsReadPathParams = field(default=None)
    

@dataclass
class NodesContributorsReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
