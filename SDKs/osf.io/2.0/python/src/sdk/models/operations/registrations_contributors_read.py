from dataclasses import dataclass, field



@dataclass
class RegistrationsContributorsReadPathParams:
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsContributorsReadRequest:
    path_params: RegistrationsContributorsReadPathParams = field(default=None)
    

@dataclass
class RegistrationsContributorsReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
