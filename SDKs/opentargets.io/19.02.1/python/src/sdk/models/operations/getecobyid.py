from dataclasses import dataclass, field



@dataclass
class GetEcObyIDPathParams:
    eco_id: str = field(metadata={'path_param': { 'field_name': 'ECO_ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEcObyIDRequest:
    path_params: GetEcObyIDPathParams = field()
    

@dataclass
class GetEcObyIDResponse:
    content_type: str = field()
    status_code: int = field()
    
