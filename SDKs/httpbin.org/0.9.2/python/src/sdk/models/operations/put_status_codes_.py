from dataclasses import dataclass, field



@dataclass
class PutStatusCodesPathParams:
    codes: str = field(default=None, metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutStatusCodesRequest:
    path_params: PutStatusCodesPathParams = field(default=None)
    

@dataclass
class PutStatusCodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
