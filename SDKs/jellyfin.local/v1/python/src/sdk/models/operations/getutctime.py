from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUtcTimeResponse:
    content_type: str = field()
    status_code: int = field()
    utc_time_response: Optional[shared.UtcTimeResponse] = field(default=None)
    
