from dataclasses import dataclass, field



@dataclass
class DeletePatientsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePatientsIDRequest:
    path_params: DeletePatientsIDPathParams = field(default=None)
    

@dataclass
class DeletePatientsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
