from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServiceLiveStatsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceLiveStatsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceLiveStatsRequest:
    path_params: ServiceLiveStatsPathParams = field(default=None)
    security: ServiceLiveStatsSecurity = field(default=None)
    

@dataclass
class ServiceLiveStatsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    stats: Optional[shared.Stats] = field(default=None)
    status_code: int = field(default=None)
    
