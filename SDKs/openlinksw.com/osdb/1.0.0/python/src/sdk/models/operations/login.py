from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LoginResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    login_response: Optional[shared.LoginResponse] = field(default=None)
    
