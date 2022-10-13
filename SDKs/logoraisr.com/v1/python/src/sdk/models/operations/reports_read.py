from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportsReadPathParams:
    report_number: str = field(default=None, metadata={'path_param': { 'field_name': 'report_number', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReportsReadRequest:
    path_params: ReportsReadPathParams = field(default=None)
    

@dataclass
class ReportsReadResponse:
    content_type: str = field(default=None)
    report: Optional[shared.Report] = field(default=None)
    status_code: int = field(default=None)
    
