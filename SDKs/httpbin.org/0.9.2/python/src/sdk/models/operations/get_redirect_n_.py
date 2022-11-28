from dataclasses import dataclass, field



@dataclass
class GetRedirectNPathParams:
    n: int = field(metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRedirectNRequest:
    path_params: GetRedirectNPathParams = field()
    

@dataclass
class GetRedirectNResponse:
    content_type: str = field()
    status_code: int = field()
    
