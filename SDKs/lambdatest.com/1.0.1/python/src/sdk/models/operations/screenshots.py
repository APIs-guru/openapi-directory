from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ScreenshotsPathParams:
    test_id: str = field(default=None, metadata={'path_param': { 'field_name': 'test_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScreenshotsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ScreenshotsRequest:
    path_params: ScreenshotsPathParams = field(default=None)
    security: ScreenshotsSecurity = field(default=None)
    

@dataclass
class ScreenshotsResponse:
    access_denied: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    screenshot_details: Optional[shared.ScreenshotDetails] = field(default=None)
    screenshot_not_found: Optional[Any] = field(default=None)
    
