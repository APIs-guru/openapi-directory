from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsIdentifiersListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsIdentifiersListRequest:
    path_params: RegistrationsIdentifiersListPathParams = field()
    

@dataclass
class RegistrationsIdentifiersListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
