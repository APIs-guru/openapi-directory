from dataclasses import dataclass, field



@dataclass
class GetBase64ValuePathParams:
    value: str = field(default=None, metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBase64ValueRequest:
    path_params: GetBase64ValuePathParams = field(default=None)
    

@dataclass
class GetBase64ValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
