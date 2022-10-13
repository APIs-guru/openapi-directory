from dataclasses import dataclass, field



@dataclass
class PostStatusCodesPathParams:
    codes: str = field(default=None, metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStatusCodesRequest:
    path_params: PostStatusCodesPathParams = field(default=None)
    

@dataclass
class PostStatusCodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
