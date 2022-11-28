from dataclasses import dataclass, field



@dataclass
class PostStatusCodesPathParams:
    codes: str = field(metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStatusCodesRequest:
    path_params: PostStatusCodesPathParams = field()
    

@dataclass
class PostStatusCodesResponse:
    content_type: str = field()
    status_code: int = field()
    
