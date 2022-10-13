from dataclasses import dataclass, field



@dataclass
class GetEasywindPathParams:
    easywind_id: str = field(default=None, metadata={'path_param': { 'field_name': 'easywindId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEasywindQueryParams:
    period: str = field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEasywindRequest:
    path_params: GetEasywindPathParams = field(default=None)
    query_params: GetEasywindQueryParams = field(default=None)
    

@dataclass
class GetEasywindResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
