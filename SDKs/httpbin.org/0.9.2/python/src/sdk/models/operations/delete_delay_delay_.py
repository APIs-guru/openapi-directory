from dataclasses import dataclass, field



@dataclass
class DeleteDelayDelayPathParams:
    delay: int = field(default=None, metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDelayDelayRequest:
    path_params: DeleteDelayDelayPathParams = field(default=None)
    

@dataclass
class DeleteDelayDelayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
