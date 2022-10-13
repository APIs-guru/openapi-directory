from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReportsListResponse:
    content_type: str = field(default=None)
    report: Optional[shared.Report] = field(default=None)
    status_code: int = field(default=None)
    
