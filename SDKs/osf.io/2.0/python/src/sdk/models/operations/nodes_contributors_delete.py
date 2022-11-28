from dataclasses import dataclass, field



@dataclass
class NodesContributorsDeletePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesContributorsDeleteRequest:
    path_params: NodesContributorsDeletePathParams = field()
    

@dataclass
class NodesContributorsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
