from dataclasses import dataclass, field



@dataclass
class GetBase64ValuePathParams:
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBase64ValueRequest:
    path_params: GetBase64ValuePathParams = field()
    

@dataclass
class GetBase64ValueResponse:
    content_type: str = field()
    status_code: int = field()
    
