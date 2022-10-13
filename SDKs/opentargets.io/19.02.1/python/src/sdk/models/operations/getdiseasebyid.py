from dataclasses import dataclass, field



@dataclass
class GetDiseaseByIDPathParams:
    disease: str = field(default=None, metadata={'path_param': { 'field_name': 'disease', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDiseaseByIDRequest:
    path_params: GetDiseaseByIDPathParams = field(default=None)
    

@dataclass
class GetDiseaseByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
