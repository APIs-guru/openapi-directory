from dataclasses import dataclass, field



@dataclass
class DeleteStatusCodesPathParams:
    codes: str = field(default=None, metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStatusCodesRequest:
    path_params: DeleteStatusCodesPathParams = field(default=None)
    

@dataclass
class DeleteStatusCodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
