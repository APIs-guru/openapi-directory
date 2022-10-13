from dataclasses import dataclass, field



@dataclass
class GetQueriesIDLevelPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueriesIDLevelRequest:
    path_params: GetQueriesIDLevelPathParams = field(default=None)
    

@dataclass
class GetQueriesIDLevelResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
