from dataclasses import dataclass, field



@dataclass
class DeletePatientsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePatientsIDRequest:
    path_params: DeletePatientsIDPathParams = field()
    

@dataclass
class DeletePatientsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
