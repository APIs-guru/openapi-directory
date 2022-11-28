from dataclasses import dataclass, field



@dataclass
class PostStudiesIDReconstructPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStudiesIDReconstructRequest:
    path_params: PostStudiesIDReconstructPathParams = field()
    

@dataclass
class PostStudiesIDReconstructResponse:
    content_type: str = field()
    status_code: int = field()
    
