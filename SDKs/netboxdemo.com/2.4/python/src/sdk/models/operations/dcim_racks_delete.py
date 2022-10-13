from dataclasses import dataclass, field



@dataclass
class DcimRacksDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRacksDeleteRequest:
    path_params: DcimRacksDeletePathParams = field(default=None)
    

@dataclass
class DcimRacksDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
