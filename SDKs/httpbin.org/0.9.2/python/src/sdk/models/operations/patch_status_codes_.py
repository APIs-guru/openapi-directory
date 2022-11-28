from dataclasses import dataclass, field



@dataclass
class PatchStatusCodesPathParams:
    codes: str = field(metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchStatusCodesRequest:
    path_params: PatchStatusCodesPathParams = field()
    

@dataclass
class PatchStatusCodesResponse:
    content_type: str = field()
    status_code: int = field()
    
