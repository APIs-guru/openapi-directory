from dataclasses import dataclass, field



@dataclass
class DeleteQueriesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteQueriesIDRequest:
    path_params: DeleteQueriesIDPathParams = field(default=None)
    

@dataclass
class DeleteQueriesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
