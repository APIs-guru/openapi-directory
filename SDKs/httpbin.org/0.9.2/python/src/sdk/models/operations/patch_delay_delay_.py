from dataclasses import dataclass, field



@dataclass
class PatchDelayDelayPathParams:
    delay: int = field(metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchDelayDelayRequest:
    path_params: PatchDelayDelayPathParams = field()
    

@dataclass
class PatchDelayDelayResponse:
    content_type: str = field()
    status_code: int = field()
    
