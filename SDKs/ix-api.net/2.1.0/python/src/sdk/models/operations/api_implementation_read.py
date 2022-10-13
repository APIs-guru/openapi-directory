from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIImplementationReadResponse:
    content_type: str = field(default=None)
    implementation_response: Optional[shared.ImplementationResponse] = field(default=None)
    status_code: int = field(default=None)
    
