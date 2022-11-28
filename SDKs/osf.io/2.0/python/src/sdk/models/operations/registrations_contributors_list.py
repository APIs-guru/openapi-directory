from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsContributorsListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsContributorsListRequest:
    path_params: RegistrationsContributorsListPathParams = field()
    

@dataclass
class RegistrationsContributorsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
