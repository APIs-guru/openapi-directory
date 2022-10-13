from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LoginResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    login_response: Optional[shared.LoginResponse] = field(default=None)
    status_code: int = field(default=None)
    
