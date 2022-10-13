from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CancelReportPathParams:
    report_id: str = field(default=None, metadata={'path_param': { 'field_name': 'report_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelReportSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CancelReportRequest:
    path_params: CancelReportPathParams = field(default=None)
    security: CancelReportSecurity = field(default=None)
    

@dataclass
class CancelReportResponses:
    cancel_report_200_application_json_one_of: Optional[Any] = field(default=None)
    cancel_report_401_application_json_any: Optional[Any] = field(default=None)
    cancel_report_404_application_json_any: Optional[Any] = field(default=None)
    cancel_report_409_application_json_any: Optional[Any] = field(default=None)
    

@dataclass
class CancelReportResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CancelReportResponses]] = field(default=None)
    status_code: int = field(default=None)
    
