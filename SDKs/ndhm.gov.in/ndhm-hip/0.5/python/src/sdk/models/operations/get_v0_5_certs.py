from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV05CertsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    certs: Optional[shared.Certs] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
