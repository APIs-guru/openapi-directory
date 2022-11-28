from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SummaryGetV2SummaryGetResponse:
    content_type: str = field()
    status_code: int = field()
    open_aq_result: Optional[shared.OpenAqResult] = field(default=None)
    
