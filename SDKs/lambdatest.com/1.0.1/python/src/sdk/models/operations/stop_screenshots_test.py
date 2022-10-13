from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StopScreenshotsTestPathParams:
    test_id: str = field(default=None, metadata={'path_param': { 'field_name': 'test_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopScreenshotsTestSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class StopScreenshotsTestRequest:
    path_params: StopScreenshotsTestPathParams = field(default=None)
    security: StopScreenshotsTestSecurity = field(default=None)
    

@dataclass
class StopScreenshotsTestResponse:
    access_denied: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    stop_screenshot_not_found: Optional[Any] = field(default=None)
    stop_screenshot_success: Optional[Any] = field(default=None)
    
