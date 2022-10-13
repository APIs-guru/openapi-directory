from dataclasses import dataclass, field



@dataclass
class GetInstancesIDContentPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDContentQueryParams:
    dot_: str = field(default=None, metadata={'query_param': { 'field_name': '...', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDContentRequest:
    path_params: GetInstancesIDContentPathParams = field(default=None)
    query_params: GetInstancesIDContentQueryParams = field(default=None)
    

@dataclass
class GetInstancesIDContentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
