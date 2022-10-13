from dataclasses import dataclass, field



@dataclass
class GetStreamBytesNPathParams:
    n: int = field(default=None, metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStreamBytesNRequest:
    path_params: GetStreamBytesNPathParams = field(default=None)
    

@dataclass
class GetStreamBytesNResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
