from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsCommentsListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsCommentsListRequest:
    path_params: RegistrationsCommentsListPathParams = field()
    

@dataclass
class RegistrationsCommentsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
