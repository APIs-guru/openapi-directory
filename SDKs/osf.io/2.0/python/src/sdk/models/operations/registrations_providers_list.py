from dataclasses import dataclass, field
from typing import List


@dataclass
class RegistrationsProvidersListPathParams:
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsProvidersListRequest:
    path_params: RegistrationsProvidersListPathParams = field(default=None)
    

@dataclass
class RegistrationsProvidersListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
