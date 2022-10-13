from dataclasses import dataclass, field



@dataclass
class PostPatientsIDReconstructPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDReconstructRequest:
    path_params: PostPatientsIDReconstructPathParams = field(default=None)
    

@dataclass
class PostPatientsIDReconstructResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
