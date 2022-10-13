from dataclasses import dataclass, field



@dataclass
class GetStreamNPathParams:
    n: int = field(default=None, metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStreamNRequest:
    path_params: GetStreamNPathParams = field(default=None)
    

@dataclass
class GetStreamNResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
