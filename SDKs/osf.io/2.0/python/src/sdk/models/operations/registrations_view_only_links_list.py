from dataclasses import dataclass, field
from typing import List


@dataclass
class RegistrationsViewOnlyLinksListPathParams:
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsViewOnlyLinksListRequest:
    path_params: RegistrationsViewOnlyLinksListPathParams = field(default=None)
    

@dataclass
class RegistrationsViewOnlyLinksListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
