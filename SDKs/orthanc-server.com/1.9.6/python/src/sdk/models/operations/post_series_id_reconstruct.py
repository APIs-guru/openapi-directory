from dataclasses import dataclass, field



@dataclass
class PostSeriesIDReconstructPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSeriesIDReconstructRequest:
    path_params: PostSeriesIDReconstructPathParams = field(default=None)
    

@dataclass
class PostSeriesIDReconstructResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
