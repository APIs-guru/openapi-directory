from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWakeOnLanInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWakeOnLanInfoRequest:
    security: GetWakeOnLanInfoSecurity = field()
    

@dataclass
class GetWakeOnLanInfoResponse:
    content_type: str = field()
    status_code: int = field()
    wake_on_lan_infos: Optional[List[shared.WakeOnLanInfo]] = field(default=None)
    
