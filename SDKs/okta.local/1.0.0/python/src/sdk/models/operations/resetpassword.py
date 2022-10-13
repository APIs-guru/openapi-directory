from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResetPasswordPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetPasswordQueryParams:
    send_email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sendEmail', 'style': 'form', 'explode': True }})
    

@dataclass
class ResetPasswordRequest:
    path_params: ResetPasswordPathParams = field(default=None)
    query_params: ResetPasswordQueryParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class ResetPasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
