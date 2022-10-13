from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalLiveStatsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GlobalLiveStatsRequest:
    security: GlobalLiveStatsSecurity = field(default=None)
    

@dataclass
class GlobalLiveStatsResponse:
    content_type: str = field(default=None)
    stats: Optional[shared.Stats] = field(default=None)
    status_code: int = field(default=None)
    
