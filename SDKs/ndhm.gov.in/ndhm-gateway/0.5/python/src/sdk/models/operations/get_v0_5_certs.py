from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV05CertsResponse:
    body: bytes = field(default=None)
    certs: Optional[shared.Certs] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
