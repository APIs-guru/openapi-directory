from dataclasses import dataclass, field



@dataclass
class TraceDelayDelayPathParams:
    delay: int = field(metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class TraceDelayDelayRequest:
    path_params: TraceDelayDelayPathParams = field()
    

@dataclass
class TraceDelayDelayResponse:
    content_type: str = field()
    status_code: int = field()
    
