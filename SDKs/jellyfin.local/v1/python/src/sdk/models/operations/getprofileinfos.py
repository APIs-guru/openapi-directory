from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProfileInfosSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProfileInfosRequest:
    security: GetProfileInfosSecurity = field()
    

@dataclass
class GetProfileInfosResponse:
    content_type: str = field()
    status_code: int = field()
    device_profile_infos: Optional[List[shared.DeviceProfileInfo]] = field(default=None)
    
