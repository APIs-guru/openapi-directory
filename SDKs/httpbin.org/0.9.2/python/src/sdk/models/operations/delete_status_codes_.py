from dataclasses import dataclass, field



@dataclass
class DeleteStatusCodesPathParams:
    codes: str = field(metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStatusCodesRequest:
    path_params: DeleteStatusCodesPathParams = field()
    

@dataclass
class DeleteStatusCodesResponse:
    content_type: str = field()
    status_code: int = field()
    
