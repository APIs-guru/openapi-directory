from dataclasses import dataclass, field
from typing import List


@dataclass
class RegistrationsLinkedNodesListPathParams:
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsLinkedNodesListRequest:
    path_params: RegistrationsLinkedNodesListPathParams = field(default=None)
    

@dataclass
class RegistrationsLinkedNodesListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
