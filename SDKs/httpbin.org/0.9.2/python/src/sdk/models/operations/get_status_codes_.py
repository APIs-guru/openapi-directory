from dataclasses import dataclass, field



@dataclass
class GetStatusCodesPathParams:
    codes: str = field(metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatusCodesRequest:
    path_params: GetStatusCodesPathParams = field()
    

@dataclass
class GetStatusCodesResponse:
    content_type: str = field()
    status_code: int = field()
    
