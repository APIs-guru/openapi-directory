from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResetPasswordPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetPasswordQueryParams:
    send_email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sendEmail', 'style': 'form', 'explode': True }})
    

@dataclass
class ResetPasswordRequest:
    path_params: ResetPasswordPathParams = field()
    query_params: ResetPasswordQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class ResetPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    
