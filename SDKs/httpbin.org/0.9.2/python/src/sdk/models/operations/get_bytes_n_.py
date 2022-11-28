from dataclasses import dataclass, field



@dataclass
class GetBytesNPathParams:
    n: int = field(metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBytesNRequest:
    path_params: GetBytesNPathParams = field()
    

@dataclass
class GetBytesNResponse:
    content_type: str = field()
    status_code: int = field()
    
