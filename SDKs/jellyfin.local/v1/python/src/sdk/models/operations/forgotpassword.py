from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ForgotPasswordRequests:
    forgot_password_dto: Optional[shared.ForgotPasswordDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    forgot_password_dto1: Optional[shared.ForgotPasswordDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    forgot_password_dto2: Optional[shared.ForgotPasswordDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ForgotPasswordRequest:
    request: ForgotPasswordRequests = field(default=None)
    

@dataclass
class ForgotPasswordResponse:
    content_type: str = field(default=None)
    forgot_password_result: Optional[shared.ForgotPasswordResult] = field(default=None)
    status_code: int = field(default=None)
    
