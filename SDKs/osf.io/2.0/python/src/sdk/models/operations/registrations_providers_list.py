from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsProvidersListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsProvidersListRequest:
    path_params: RegistrationsProvidersListPathParams = field()
    

@dataclass
class RegistrationsProvidersListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
