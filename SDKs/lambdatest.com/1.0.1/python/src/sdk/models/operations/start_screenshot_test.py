from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StartScreenshotTestSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class StartScreenshotTestRequest:
    request: shared.ScreenshotPayload = field(metadata={'request': { 'media_type': 'application/json' }})
    security: StartScreenshotTestSecurity = field()
    

@dataclass
class StartScreenshotTestResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied: Optional[Any] = field(default=None)
    forbidden: Optional[Any] = field(default=None)
    start_screenshot_bad_request: Optional[shared.StartScreenshotBadRequest] = field(default=None)
    start_screenshot_success: Optional[shared.StartScreenshotSuccess] = field(default=None)
    
