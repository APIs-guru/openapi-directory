from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServiceLiveStatsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceLiveStatsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceLiveStatsRequest:
    path_params: ServiceLiveStatsPathParams = field()
    security: ServiceLiveStatsSecurity = field()
    

@dataclass
class ServiceLiveStatsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    stats: Optional[shared.Stats] = field(default=None)
    
