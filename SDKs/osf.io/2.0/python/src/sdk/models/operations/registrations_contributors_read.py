from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsContributorsReadPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsContributorsReadRequest:
    path_params: RegistrationsContributorsReadPathParams = field()
    

@dataclass
class RegistrationsContributorsReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
