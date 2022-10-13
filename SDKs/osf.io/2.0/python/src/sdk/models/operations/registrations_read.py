from dataclasses import dataclass, field



@dataclass
class RegistrationsReadPathParams:
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsReadRequest:
    path_params: RegistrationsReadPathParams = field(default=None)
    

@dataclass
class RegistrationsReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
