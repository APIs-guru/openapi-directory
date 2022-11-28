from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogoutResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    logout_response: Optional[shared.LogoutResponse] = field(default=None)
    
