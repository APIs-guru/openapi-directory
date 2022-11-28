from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalLiveStatsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GlobalLiveStatsRequest:
    security: GlobalLiveStatsSecurity = field()
    

@dataclass
class GlobalLiveStatsResponse:
    content_type: str = field()
    status_code: int = field()
    stats: Optional[shared.Stats] = field(default=None)
    
