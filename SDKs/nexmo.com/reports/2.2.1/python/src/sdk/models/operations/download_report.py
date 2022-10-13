from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DownloadReportPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadReportSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DownloadReportRequest:
    path_params: DownloadReportPathParams = field(default=None)
    security: DownloadReportSecurity = field(default=None)
    

@dataclass
class DownloadReportResponses:
    raw_response: bytes = field(default=None)
    download_report_401_application_json_any: Optional[Any] = field(default=None)
    download_report_404_application_json_any: Optional[Any] = field(default=None)
    

@dataclass
class DownloadReportResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, DownloadReportResponses]] = field(default=None)
    status_code: int = field(default=None)
    
