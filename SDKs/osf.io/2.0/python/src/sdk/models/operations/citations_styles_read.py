from dataclasses import dataclass, field



@dataclass
class CitationsStylesReadPathParams:
    style_id: str = field(default=None, metadata={'path_param': { 'field_name': 'style_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CitationsStylesReadRequest:
    path_params: CitationsStylesReadPathParams = field(default=None)
    

@dataclass
class CitationsStylesReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
