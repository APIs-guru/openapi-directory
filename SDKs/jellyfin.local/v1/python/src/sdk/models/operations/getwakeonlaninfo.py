from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWakeOnLanInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWakeOnLanInfoRequest:
    security: GetWakeOnLanInfoSecurity = field(default=None)
    

@dataclass
class GetWakeOnLanInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wake_on_lan_infos: Optional[List[shared.WakeOnLanInfo]] = field(default=None)
    
