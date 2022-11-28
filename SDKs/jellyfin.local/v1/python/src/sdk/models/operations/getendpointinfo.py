from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEndpointInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEndpointInfoRequest:
    security: GetEndpointInfoSecurity = field()
    

@dataclass
class GetEndpointInfoResponse:
    content_type: str = field()
    status_code: int = field()
    end_point_info: Optional[shared.EndPointInfo] = field(default=None)
    
