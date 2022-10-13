from dataclasses import dataclass, field



@dataclass
class PatchStatusCodesPathParams:
    codes: str = field(default=None, metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchStatusCodesRequest:
    path_params: PatchStatusCodesPathParams = field(default=None)
    

@dataclass
class PatchStatusCodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
