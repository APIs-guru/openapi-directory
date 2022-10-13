from dataclasses import dataclass, field



@dataclass
class PostInstancesIDReconstructPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDReconstructRequest:
    path_params: PostInstancesIDReconstructPathParams = field(default=None)
    

@dataclass
class PostInstancesIDReconstructResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
