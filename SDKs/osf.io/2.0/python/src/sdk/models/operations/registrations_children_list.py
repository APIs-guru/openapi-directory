from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsChildrenListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsChildrenListRequest:
    path_params: RegistrationsChildrenListPathParams = field()
    

@dataclass
class RegistrationsChildrenListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
