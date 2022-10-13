from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StopSnowMonkeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class StopSnowMonkeyRequest:
    security: StopSnowMonkeySecurity = field(default=None)
    

@dataclass
class StopSnowMonkeyResponse:
    content_type: str = field(default=None)
    done: Optional[shared.Done] = field(default=None)
    status_code: int = field(default=None)
    
