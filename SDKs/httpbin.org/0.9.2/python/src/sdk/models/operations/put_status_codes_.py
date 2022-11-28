from dataclasses import dataclass, field



@dataclass
class PutStatusCodesPathParams:
    codes: str = field(metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutStatusCodesRequest:
    path_params: PutStatusCodesPathParams = field()
    

@dataclass
class PutStatusCodesResponse:
    content_type: str = field()
    status_code: int = field()
    
