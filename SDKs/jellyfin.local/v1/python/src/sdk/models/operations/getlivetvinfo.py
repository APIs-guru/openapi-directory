from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLiveTvInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLiveTvInfoRequest:
    security: GetLiveTvInfoSecurity = field()
    

@dataclass
class GetLiveTvInfoResponse:
    content_type: str = field()
    status_code: int = field()
    live_tv_info: Optional[shared.LiveTvInfo] = field(default=None)
    
