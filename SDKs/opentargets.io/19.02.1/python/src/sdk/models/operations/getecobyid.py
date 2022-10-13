from dataclasses import dataclass, field



@dataclass
class GetEcObyIDPathParams:
    eco_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ECO_ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEcObyIDRequest:
    path_params: GetEcObyIDPathParams = field(default=None)
    

@dataclass
class GetEcObyIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
