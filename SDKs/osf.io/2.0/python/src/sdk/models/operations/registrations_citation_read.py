from dataclasses import dataclass, field



@dataclass
class RegistrationsCitationReadPathParams:
    citation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'citation_id', 'style': 'simple', 'explode': False }})
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsCitationReadRequest:
    path_params: RegistrationsCitationReadPathParams = field(default=None)
    

@dataclass
class RegistrationsCitationReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
