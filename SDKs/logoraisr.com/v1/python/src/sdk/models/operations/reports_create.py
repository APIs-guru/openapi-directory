from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportsCreateRequest:
    request: shared.ReportRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReportsCreateResponse:
    content_type: str = field(default=None)
    report_response: Optional[shared.ReportResponse] = field(default=None)
    status_code: int = field(default=None)
    
