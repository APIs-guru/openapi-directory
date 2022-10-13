from dataclasses import dataclass, field
from typing import List


@dataclass
class RegistrationsWikisListPathParams:
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsWikisListRequest:
    path_params: RegistrationsWikisListPathParams = field(default=None)
    

@dataclass
class RegistrationsWikisListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
