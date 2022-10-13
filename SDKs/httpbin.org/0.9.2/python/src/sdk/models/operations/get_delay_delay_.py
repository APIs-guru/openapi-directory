from dataclasses import dataclass, field



@dataclass
class GetDelayDelayPathParams:
    delay: int = field(default=None, metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDelayDelayRequest:
    path_params: GetDelayDelayPathParams = field(default=None)
    

@dataclass
class GetDelayDelayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
