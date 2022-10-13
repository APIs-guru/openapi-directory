from dataclasses import dataclass, field



@dataclass
class PutDelayDelayPathParams:
    delay: int = field(default=None, metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDelayDelayRequest:
    path_params: PutDelayDelayPathParams = field(default=None)
    

@dataclass
class PutDelayDelayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
