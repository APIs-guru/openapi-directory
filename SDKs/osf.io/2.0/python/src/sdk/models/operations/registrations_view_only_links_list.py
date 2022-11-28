from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsViewOnlyLinksListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsViewOnlyLinksListRequest:
    path_params: RegistrationsViewOnlyLinksListPathParams = field()
    

@dataclass
class RegistrationsViewOnlyLinksListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
