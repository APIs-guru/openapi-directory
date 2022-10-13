from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ActivateUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivateUserQueryParams:
    send_email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sendEmail', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivateUserRequest:
    path_params: ActivateUserPathParams = field(default=None)
    query_params: ActivateUserQueryParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class ActivateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
