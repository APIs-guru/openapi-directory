from dataclasses import dataclass, field



@dataclass
class PutDelayDelayPathParams:
    delay: int = field(metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDelayDelayRequest:
    path_params: PutDelayDelayPathParams = field()
    

@dataclass
class PutDelayDelayResponse:
    content_type: str = field()
    status_code: int = field()
    
