from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServiceDeleteTargetPathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceDeleteTargetSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceDeleteTargetRequest:
    path_params: ServiceDeleteTargetPathParams = field(default=None)
    security: ServiceDeleteTargetSecurity = field(default=None)
    

@dataclass
class ServiceDeleteTargetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    targets: Optional[List[shared.Target]] = field(default=None)
    
