from dataclasses import dataclass, field



@dataclass
class DeleteModalitiesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteModalitiesIDRequest:
    path_params: DeleteModalitiesIDPathParams = field()
    

@dataclass
class DeleteModalitiesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
