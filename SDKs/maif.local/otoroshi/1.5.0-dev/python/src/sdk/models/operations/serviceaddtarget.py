from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServiceAddTargetPathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceAddTargetSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceAddTargetRequest:
    path_params: ServiceAddTargetPathParams = field()
    security: ServiceAddTargetSecurity = field()
    request: Optional[shared.Target] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ServiceAddTargetResponse:
    content_type: str = field()
    status_code: int = field()
    targets: Optional[List[shared.Target]] = field(default=None)
    
