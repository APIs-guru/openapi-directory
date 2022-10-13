from dataclasses import dataclass, field



@dataclass
class GetBytesNPathParams:
    n: int = field(default=None, metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBytesNRequest:
    path_params: GetBytesNPathParams = field(default=None)
    

@dataclass
class GetBytesNResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
