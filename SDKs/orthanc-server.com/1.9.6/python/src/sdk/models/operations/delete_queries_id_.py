from dataclasses import dataclass, field



@dataclass
class DeleteQueriesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteQueriesIDRequest:
    path_params: DeleteQueriesIDPathParams = field()
    

@dataclass
class DeleteQueriesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
