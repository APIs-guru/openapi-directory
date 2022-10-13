from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUtcTimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    utc_time_response: Optional[shared.UtcTimeResponse] = field(default=None)
    
