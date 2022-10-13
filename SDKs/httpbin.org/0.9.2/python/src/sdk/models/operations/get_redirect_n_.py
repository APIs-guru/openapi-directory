from dataclasses import dataclass, field



@dataclass
class GetRedirectNPathParams:
    n: int = field(default=None, metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRedirectNRequest:
    path_params: GetRedirectNPathParams = field(default=None)
    

@dataclass
class GetRedirectNResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
