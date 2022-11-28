from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportsListResponse:
    content_type: str = field()
    status_code: int = field()
    report: Optional[shared.Report] = field(default=None)
    
