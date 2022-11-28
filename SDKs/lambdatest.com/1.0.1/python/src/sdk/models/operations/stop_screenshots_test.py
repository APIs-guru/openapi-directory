from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StopScreenshotsTestPathParams:
    test_id: str = field(metadata={'path_param': { 'field_name': 'test_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopScreenshotsTestSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class StopScreenshotsTestRequest:
    path_params: StopScreenshotsTestPathParams = field()
    security: StopScreenshotsTestSecurity = field()
    

@dataclass
class StopScreenshotsTestResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied: Optional[Any] = field(default=None)
    forbidden: Optional[Any] = field(default=None)
    stop_screenshot_not_found: Optional[Any] = field(default=None)
    stop_screenshot_success: Optional[Any] = field(default=None)
    
