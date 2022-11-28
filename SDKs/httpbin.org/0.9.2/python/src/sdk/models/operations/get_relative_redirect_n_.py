from dataclasses import dataclass, field



@dataclass
class GetRelativeRedirectNPathParams:
    n: int = field(metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRelativeRedirectNRequest:
    path_params: GetRelativeRedirectNPathParams = field()
    

@dataclass
class GetRelativeRedirectNResponse:
    content_type: str = field()
    status_code: int = field()
    
