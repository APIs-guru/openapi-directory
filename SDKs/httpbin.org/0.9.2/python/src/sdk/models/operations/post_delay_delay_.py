from dataclasses import dataclass, field



@dataclass
class PostDelayDelayPathParams:
    delay: int = field(default=None, metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDelayDelayRequest:
    path_params: PostDelayDelayPathParams = field(default=None)
    

@dataclass
class PostDelayDelayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
