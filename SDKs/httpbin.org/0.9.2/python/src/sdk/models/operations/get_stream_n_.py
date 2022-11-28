from dataclasses import dataclass, field



@dataclass
class GetStreamNPathParams:
    n: int = field(metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStreamNRequest:
    path_params: GetStreamNPathParams = field()
    

@dataclass
class GetStreamNResponse:
    content_type: str = field()
    status_code: int = field()
    
