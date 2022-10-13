from dataclasses import dataclass, field



@dataclass
class GetAbsoluteRedirectNPathParams:
    n: int = field(default=None, metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAbsoluteRedirectNRequest:
    path_params: GetAbsoluteRedirectNPathParams = field(default=None)
    

@dataclass
class GetAbsoluteRedirectNResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
