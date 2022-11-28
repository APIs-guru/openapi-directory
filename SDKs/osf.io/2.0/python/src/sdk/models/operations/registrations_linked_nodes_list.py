from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsLinkedNodesListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsLinkedNodesListRequest:
    path_params: RegistrationsLinkedNodesListPathParams = field()
    

@dataclass
class RegistrationsLinkedNodesListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
