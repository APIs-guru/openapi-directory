from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ZippedScreenshotsPathParams:
    test_id: str = field(default=None, metadata={'path_param': { 'field_name': 'test_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ZippedScreenshotsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ZippedScreenshotsRequest:
    path_params: ZippedScreenshotsPathParams = field(default=None)
    security: ZippedScreenshotsSecurity = field(default=None)
    

@dataclass
class ZippedScreenshotsResponse:
    access_denied: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    screenshot_not_found: Optional[Any] = field(default=None)
    zipped_screenshots_success: Optional[shared.ZippedScreenshotsSuccess] = field(default=None)
    
