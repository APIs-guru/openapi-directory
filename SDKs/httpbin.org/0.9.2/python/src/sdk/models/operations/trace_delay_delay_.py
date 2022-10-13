from dataclasses import dataclass, field



@dataclass
class TraceDelayDelayPathParams:
    delay: int = field(default=None, metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class TraceDelayDelayRequest:
    path_params: TraceDelayDelayPathParams = field(default=None)
    

@dataclass
class TraceDelayDelayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
