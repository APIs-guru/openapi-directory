from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLiveTvInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLiveTvInfoRequest:
    security: GetLiveTvInfoSecurity = field(default=None)
    

@dataclass
class GetLiveTvInfoResponse:
    content_type: str = field(default=None)
    live_tv_info: Optional[shared.LiveTvInfo] = field(default=None)
    status_code: int = field(default=None)
    
