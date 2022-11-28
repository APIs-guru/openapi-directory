from dataclasses import dataclass, field



@dataclass
class DcimRacksDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRacksDeleteRequest:
    path_params: DcimRacksDeletePathParams = field()
    

@dataclass
class DcimRacksDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
