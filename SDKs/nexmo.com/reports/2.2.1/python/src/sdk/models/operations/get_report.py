from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetReportPathParams:
    report_id: str = field(default=None, metadata={'path_param': { 'field_name': 'report_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetReportRequest:
    path_params: GetReportPathParams = field(default=None)
    security: GetReportSecurity = field(default=None)
    

@dataclass
class GetReportResponses:
    get_report_200_application_json_one_of: Optional[Any] = field(default=None)
    get_report_401_application_json_any: Optional[Any] = field(default=None)
    get_report_404_application_json_any: Optional[Any] = field(default=None)
    

@dataclass
class GetReportResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, GetReportResponses]] = field(default=None)
    status_code: int = field(default=None)
    
