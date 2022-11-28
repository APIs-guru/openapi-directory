from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StartSnowMonkeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class StartSnowMonkeyRequest:
    security: StartSnowMonkeySecurity = field()
    

@dataclass
class StartSnowMonkeyResponse:
    content_type: str = field()
    status_code: int = field()
    done: Optional[shared.Done] = field(default=None)
    
