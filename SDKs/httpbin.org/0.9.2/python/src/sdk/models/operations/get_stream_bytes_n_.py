from dataclasses import dataclass, field



@dataclass
class GetStreamBytesNPathParams:
    n: int = field(metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStreamBytesNRequest:
    path_params: GetStreamBytesNPathParams = field()
    

@dataclass
class GetStreamBytesNResponse:
    content_type: str = field()
    status_code: int = field()
    
