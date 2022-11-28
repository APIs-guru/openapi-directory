from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ZippedScreenshotsPathParams:
    test_id: str = field(metadata={'path_param': { 'field_name': 'test_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ZippedScreenshotsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ZippedScreenshotsRequest:
    path_params: ZippedScreenshotsPathParams = field()
    security: ZippedScreenshotsSecurity = field()
    

@dataclass
class ZippedScreenshotsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied: Optional[Any] = field(default=None)
    forbidden: Optional[Any] = field(default=None)
    screenshot_not_found: Optional[Any] = field(default=None)
    zipped_screenshots_success: Optional[shared.ZippedScreenshotsSuccess] = field(default=None)
    
