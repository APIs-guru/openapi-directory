from dataclasses import dataclass, field



@dataclass
class PostInstancesIDReconstructPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDReconstructRequest:
    path_params: PostInstancesIDReconstructPathParams = field()
    

@dataclass
class PostInstancesIDReconstructResponse:
    content_type: str = field()
    status_code: int = field()
    
