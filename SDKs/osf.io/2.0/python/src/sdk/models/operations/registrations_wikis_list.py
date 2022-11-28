from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsWikisListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsWikisListRequest:
    path_params: RegistrationsWikisListPathParams = field()
    

@dataclass
class RegistrationsWikisListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
