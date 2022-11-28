from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsCitationsListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsCitationsListRequest:
    path_params: RegistrationsCitationsListPathParams = field()
    

@dataclass
class RegistrationsCitationsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
