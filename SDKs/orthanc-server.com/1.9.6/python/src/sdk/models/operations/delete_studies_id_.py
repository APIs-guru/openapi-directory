from dataclasses import dataclass, field



@dataclass
class DeleteStudiesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStudiesIDRequest:
    path_params: DeleteStudiesIDPathParams = field()
    

@dataclass
class DeleteStudiesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
