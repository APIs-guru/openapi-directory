from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServiceTargetsPathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceTargetsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceTargetsRequest:
    path_params: ServiceTargetsPathParams = field(default=None)
    security: ServiceTargetsSecurity = field(default=None)
    

@dataclass
class ServiceTargetsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    targets: Optional[List[shared.Target]] = field(default=None)
    
