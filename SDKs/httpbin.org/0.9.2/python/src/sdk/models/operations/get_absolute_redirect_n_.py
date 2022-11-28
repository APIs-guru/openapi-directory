from dataclasses import dataclass, field



@dataclass
class GetAbsoluteRedirectNPathParams:
    n: int = field(metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAbsoluteRedirectNRequest:
    path_params: GetAbsoluteRedirectNPathParams = field()
    

@dataclass
class GetAbsoluteRedirectNResponse:
    content_type: str = field()
    status_code: int = field()
    
