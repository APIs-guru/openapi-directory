from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRouteInfoResponse:
    content_type: str = field()
    status_code: int = field()
    info_response: Optional[shared.InfoResponse] = field(default=None)
    
