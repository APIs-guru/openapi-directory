from dataclasses import dataclass, field



@dataclass
class DeleteModalitiesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteModalitiesIDRequest:
    path_params: DeleteModalitiesIDPathParams = field(default=None)
    

@dataclass
class DeleteModalitiesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
