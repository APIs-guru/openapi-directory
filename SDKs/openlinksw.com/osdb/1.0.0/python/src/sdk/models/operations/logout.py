from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogoutResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    logout_response: Optional[shared.LogoutResponse] = field(default=None)
    status_code: int = field(default=None)
    
