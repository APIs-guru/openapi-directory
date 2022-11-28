from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGuideInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetGuideInfoRequest:
    security: GetGuideInfoSecurity = field()
    

@dataclass
class GetGuideInfoResponse:
    content_type: str = field()
    status_code: int = field()
    guide_info: Optional[shared.GuideInfo] = field(default=None)
    
