from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsViewOnlyLinksReadPathParams:
    link_id: str = field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsViewOnlyLinksReadRequest:
    path_params: RegistrationsViewOnlyLinksReadPathParams = field()
    

@dataclass
class RegistrationsViewOnlyLinksReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
