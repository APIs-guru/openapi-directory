from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServiceDeleteTargetPathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceDeleteTargetSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceDeleteTargetRequest:
    path_params: ServiceDeleteTargetPathParams = field()
    security: ServiceDeleteTargetSecurity = field()
    

@dataclass
class ServiceDeleteTargetResponse:
    content_type: str = field()
    status_code: int = field()
    targets: Optional[List[shared.Target]] = field(default=None)
    
