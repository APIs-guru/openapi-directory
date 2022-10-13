from dataclasses import dataclass, field



@dataclass
class GetRelativeRedirectNPathParams:
    n: int = field(default=None, metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRelativeRedirectNRequest:
    path_params: GetRelativeRedirectNPathParams = field(default=None)
    

@dataclass
class GetRelativeRedirectNResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
