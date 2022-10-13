from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateAsyncReportSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAsyncReportRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAsyncReportSecurity = field(default=None)
    

@dataclass
class CreateAsyncReportResponses:
    create_async_report_200_application_json_one_of: Optional[Any] = field(default=None)
    create_async_report_400_application_json_any: Optional[Any] = field(default=None)
    create_async_report_401_application_json_any: Optional[Any] = field(default=None)
    create_async_report_403_application_json_any: Optional[Any] = field(default=None)
    create_async_report_422_application_json_any: Optional[Any] = field(default=None)
    

@dataclass
class CreateAsyncReportResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateAsyncReportResponses]] = field(default=None)
    status_code: int = field(default=None)
    
