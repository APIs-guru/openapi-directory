from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGuideInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetGuideInfoRequest:
    security: GetGuideInfoSecurity = field(default=None)
    

@dataclass
class GetGuideInfoResponse:
    content_type: str = field(default=None)
    guide_info: Optional[shared.GuideInfo] = field(default=None)
    status_code: int = field(default=None)
    
