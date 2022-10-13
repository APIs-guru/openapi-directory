from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProfileInfosSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProfileInfosRequest:
    security: GetProfileInfosSecurity = field(default=None)
    

@dataclass
class GetProfileInfosResponse:
    content_type: str = field(default=None)
    device_profile_infos: Optional[List[shared.DeviceProfileInfo]] = field(default=None)
    status_code: int = field(default=None)
    
