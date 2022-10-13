from dataclasses import dataclass, field



@dataclass
class TraceStatusCodesPathParams:
    codes: str = field(default=None, metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class TraceStatusCodesRequest:
    path_params: TraceStatusCodesPathParams = field(default=None)
    

@dataclass
class TraceStatusCodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
