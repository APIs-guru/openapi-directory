from dataclasses import dataclass, field



@dataclass
class TraceStatusCodesPathParams:
    codes: str = field(metadata={'path_param': { 'field_name': 'codes', 'style': 'simple', 'explode': False }})
    

@dataclass
class TraceStatusCodesRequest:
    path_params: TraceStatusCodesPathParams = field()
    

@dataclass
class TraceStatusCodesResponse:
    content_type: str = field()
    status_code: int = field()
    
