from dataclasses import dataclass, field



@dataclass
class PatchDelayDelayPathParams:
    delay: int = field(default=None, metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchDelayDelayRequest:
    path_params: PatchDelayDelayPathParams = field(default=None)
    

@dataclass
class PatchDelayDelayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
