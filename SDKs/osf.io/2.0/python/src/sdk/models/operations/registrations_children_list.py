from dataclasses import dataclass, field
from typing import List


@dataclass
class RegistrationsChildrenListPathParams:
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsChildrenListRequest:
    path_params: RegistrationsChildrenListPathParams = field(default=None)
    

@dataclass
class RegistrationsChildrenListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
