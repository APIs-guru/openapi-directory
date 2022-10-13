from dataclasses import dataclass, field



@dataclass
class PostStudiesIDReconstructPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStudiesIDReconstructRequest:
    path_params: PostStudiesIDReconstructPathParams = field(default=None)
    

@dataclass
class PostStudiesIDReconstructResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
