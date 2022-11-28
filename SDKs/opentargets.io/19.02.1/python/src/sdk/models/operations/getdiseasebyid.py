from dataclasses import dataclass, field



@dataclass
class GetDiseaseByIDPathParams:
    disease: str = field(metadata={'path_param': { 'field_name': 'disease', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDiseaseByIDRequest:
    path_params: GetDiseaseByIDPathParams = field()
    

@dataclass
class GetDiseaseByIDResponse:
    content_type: str = field()
    status_code: int = field()
    
