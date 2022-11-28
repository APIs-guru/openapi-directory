from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsForksListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsForksListRequest:
    path_params: RegistrationsForksListPathParams = field()
    

@dataclass
class RegistrationsForksListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
