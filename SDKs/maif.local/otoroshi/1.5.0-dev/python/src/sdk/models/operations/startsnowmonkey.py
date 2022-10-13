from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StartSnowMonkeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class StartSnowMonkeyRequest:
    security: StartSnowMonkeySecurity = field(default=None)
    

@dataclass
class StartSnowMonkeyResponse:
    content_type: str = field(default=None)
    done: Optional[shared.Done] = field(default=None)
    status_code: int = field(default=None)
    
