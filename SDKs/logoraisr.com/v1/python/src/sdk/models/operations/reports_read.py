from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportsReadPathParams:
    report_number: str = field(metadata={'path_param': { 'field_name': 'report_number', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReportsReadRequest:
    path_params: ReportsReadPathParams = field()
    

@dataclass
class ReportsReadResponse:
    content_type: str = field()
    status_code: int = field()
    report: Optional[shared.Report] = field(default=None)
    
