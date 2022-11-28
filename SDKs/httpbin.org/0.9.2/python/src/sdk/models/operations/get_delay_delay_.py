from dataclasses import dataclass, field



@dataclass
class GetDelayDelayPathParams:
    delay: int = field(metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDelayDelayRequest:
    path_params: GetDelayDelayPathParams = field()
    

@dataclass
class GetDelayDelayResponse:
    content_type: str = field()
    status_code: int = field()
    
