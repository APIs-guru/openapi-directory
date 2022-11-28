from dataclasses import dataclass, field



@dataclass
class GetEasywindPathParams:
    easywind_id: str = field(metadata={'path_param': { 'field_name': 'easywindId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEasywindQueryParams:
    period: str = field(metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEasywindRequest:
    path_params: GetEasywindPathParams = field()
    query_params: GetEasywindQueryParams = field()
    

@dataclass
class GetEasywindResponse:
    content_type: str = field()
    status_code: int = field()
    
