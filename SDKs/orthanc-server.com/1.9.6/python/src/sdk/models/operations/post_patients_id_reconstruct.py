from dataclasses import dataclass, field



@dataclass
class PostPatientsIDReconstructPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDReconstructRequest:
    path_params: PostPatientsIDReconstructPathParams = field()
    

@dataclass
class PostPatientsIDReconstructResponse:
    content_type: str = field()
    status_code: int = field()
    
