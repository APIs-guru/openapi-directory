from dataclasses import dataclass, field



@dataclass
class DeleteDelayDelayPathParams:
    delay: int = field(metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDelayDelayRequest:
    path_params: DeleteDelayDelayPathParams = field()
    

@dataclass
class DeleteDelayDelayResponse:
    content_type: str = field()
    status_code: int = field()
    
