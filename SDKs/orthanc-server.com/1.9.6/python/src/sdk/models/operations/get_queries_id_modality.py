from dataclasses import dataclass, field



@dataclass
class GetQueriesIDModalityPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDModalityRequest:
    path_params: GetQueriesIDModalityPathParams = field(default=None)
    

@dataclass
class GetQueriesIDModalityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
