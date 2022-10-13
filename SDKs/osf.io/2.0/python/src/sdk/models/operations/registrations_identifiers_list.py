from dataclasses import dataclass, field
from typing import List


@dataclass
class RegistrationsIdentifiersListPathParams:
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsIdentifiersListRequest:
    path_params: RegistrationsIdentifiersListPathParams = field(default=None)
    

@dataclass
class RegistrationsIdentifiersListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
