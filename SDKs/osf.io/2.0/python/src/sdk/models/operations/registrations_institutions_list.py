from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsInstitutionsListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsInstitutionsListRequest:
    path_params: RegistrationsInstitutionsListPathParams = field()
    

@dataclass
class RegistrationsInstitutionsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
