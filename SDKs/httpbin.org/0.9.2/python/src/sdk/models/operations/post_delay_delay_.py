from dataclasses import dataclass, field



@dataclass
class PostDelayDelayPathParams:
    delay: int = field(metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDelayDelayRequest:
    path_params: PostDelayDelayPathParams = field()
    

@dataclass
class PostDelayDelayResponse:
    content_type: str = field()
    status_code: int = field()
    
