from dataclasses import dataclass, field



@dataclass
class PostSeriesIDReconstructPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSeriesIDReconstructRequest:
    path_params: PostSeriesIDReconstructPathParams = field()
    

@dataclass
class PostSeriesIDReconstructResponse:
    content_type: str = field()
    status_code: int = field()
    
