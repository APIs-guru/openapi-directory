from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForgotPasswordOneTimeCodePathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForgotPasswordOneTimeCodeQueryParams:
    send_email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sendEmail', 'style': 'form', 'explode': True }})
    

@dataclass
class ForgotPasswordOneTimeCodeRequest:
    path_params: ForgotPasswordOneTimeCodePathParams = field()
    query_params: ForgotPasswordOneTimeCodeQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class ForgotPasswordOneTimeCodeResponse:
    content_type: str = field()
    status_code: int = field()
    
