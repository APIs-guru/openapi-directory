from dataclasses import dataclass, field



@dataclass
class RegistrationsForksCreatePathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsForksCreateRequest:
    path_params: RegistrationsForksCreatePathParams = field()
    

@dataclass
class RegistrationsForksCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
